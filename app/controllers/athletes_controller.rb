class AthletesController < ApplicationController

    def me
        render json: @current_user
    end
    
    def index
        athletes = Athlete.all 
        render json: athletes, status: :ok
    end

    def show
        athlete = Athlete.find(params[:id])
        render json: athlete, status: :ok
    end

    def create
        athlete = Athlete.create!(athlete_params)
        render json: athlete, status: :created
    end

    private

    def athlete_params
        params.permit(:first_name, :last_name, :image, :university, :sport, :year, :birthday, :gender, :bio, :email, :phone_number, :username, :password, :athlete)
    end
end
