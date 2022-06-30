class DealsController < ApplicationController

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
        params.permit(:deal_id, :athlete_id, :title, :offer, :description, :criteria, :sport, :class, :age, :gender, :expiration_date, :location, :completed)
    end
end
