class DealSerializer < ActiveModel::Serializer
  attributes :id, :collaborator_id, :athlete_id, :title, :offer, :description, :school, :sport, :year, :age, :gender, :expiration_date, :location, :completed

  belongs_to :athlete
  belongs_to :collaborator
end
