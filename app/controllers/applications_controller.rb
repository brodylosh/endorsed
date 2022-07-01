class ApplicationsController < ApplicationController

    def index
        applications = Application.all 
        render json: applications, status: :ok
    end

    def show
        application = Application.find(params[:id])
        render json: application, status: :ok
    end

    def create
        application = Application.create!(application_params)
        render json: application, status: :created
    end

    private

    def application_params
        params.permit(:athlete_id, :deal_id)
    end
end
