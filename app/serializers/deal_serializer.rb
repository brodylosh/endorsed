class DealSerializer < ActiveModel::Serializer
  attributes :id, :collaborator_id, :athlete_id, :title, :offer, :description, :university, :sport, :year, :age, :gender, :expiration_date, :location, :completed

  belongs_to :athletes
  belongs_to :collaborator
end
