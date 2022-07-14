class AthletesController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :deals, :applications, :create]
    
    def index
        athletes = Athlete.all 
        render json: athletes, status: :ok
    end

    def show
        athlete = Athlete.find(params[:id])
        render json: athlete, status: :ok
    end

    def deals
        athlete = Athlete.find(params[:id])
        render json: athlete.deals, status: :ok
    end

    def applications
        athlete = Athlete.find(params[:id])
        render json: athlete.applications, status: :ok
    end

    def create
        athlete = Athlete.create!(athlete_params)
        session[:athlete_id] = athlete.id
        render json: athlete, status: :created
    end

    private

    def athlete_params
        params.require(:athlete).permit(:first_name, :last_name, :image, :school, :sport, :year, :birthday, :gender, :bio, :email, :phone_number, :username, :password, :athlete)
    end
end
