class CollaboratorsController < ApplicationController
    
    def index
        collaborators = Collaborator.all 
        render json: collaborators, status: :ok
    end

    def show
        collaborator = Collaborator.find(params[:id])
        render json: collaborator, status: :ok
    end

    def create
        collaborator = Collaborator.create!(collaborator_params)
        render json: collaborator, status: :created
    end

    private

    def collaborator_params
        params.permit(:name, :image, :address, :city, :state, :remote, :email, :phone_number, :username, :password)
    end
end
