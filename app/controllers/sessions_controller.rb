class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def me
        if session[:athlete_id] 
            render json: Athlete.find(session[:athlete_id])
        elsif session[:collaborator_id]
            render json: Collaborator.find(session[:collaborator_id])
        else 
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

    def create
        athlete = Athlete.find_by(username: params[:username])
        if athlete
            if athlete&.authenticate(params[:password])
                session[:athlete_id] = athlete.id
                render json: athlete
            else
                render json: { error: "Invalid username or password" }, status: :unauthorized
            end
        else
            collaborator = Collaborator.find_by(username: params[:username])
            if collaborator&.authenticate(params[:password])
                session[:collaborator_id] = collaborator.id
                render json: collaborator
            else
                render json: { error: "Invalid username or password" }, status: :unauthorized
            end
        end
    end

    def destroy
        if session[:athlete_id]
            session.delete :athlete_id
            head :no_content
        else 
            session.delete :collaborator_id
            head :no_content
        end
    end
end
