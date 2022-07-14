class ApplicationsController < ApplicationController
    skip_before_action :authorize, only: [:destroy]

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

    def destroy
        application = Application.find(params[:id])
        application.destroy
        head :no_content
    end

    private

    def application_params
        params.permit(:athlete_id, :deal_id)
    end
end
