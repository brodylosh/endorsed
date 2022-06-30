class DealSerializer < ActiveModel::Serializer
  attributes :id, :collaborator_id, :athlete_id, :application_id, :title, :description, :criteria, :offer, :expiration_date, :location
end
