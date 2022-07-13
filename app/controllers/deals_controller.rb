class DealsController < ApplicationController
    skip_before_action :authorize

    def index
        deals = Deal.all 
        render json: deals, status: :ok
    end

    def show
        deal = Deal.find(params[:id])
        render json: deal, status: :ok
    end

    def create
        deal = Deal.create!(deal_params)
        render json: deal, status: :created
    end

    private

    def deal_params
        params.permit(:collaborator_id, :athlete_id, :title, :offer, :description, :school, :sport, :year, :age, :gender, :expiration_date, :location, :completed, :application_id)
    end
end
