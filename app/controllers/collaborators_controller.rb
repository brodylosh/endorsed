class CollaboratorsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    
    # def me
    #     render json: @current_collaborator
    # end
    
    def index
        collaborators = Collaborator.all 
        render json: collaborators, status: :ok
    end

    def show
        render json: @current_collaborator
        # collaborator = Collaborator.find(params[:id])
        # render json: collaborator, status: :ok
    end

    def create
        collaborator = Collaborator.create!(collaborator_params)
        session[:collaborator_id] = collaborator.id
        render json: collaborator, status: :created
    end

    private

    def collaborator_params
        params.permit(:name, :image, :address, :remote, :email, :phone_number, :username, :password)
    end
end
