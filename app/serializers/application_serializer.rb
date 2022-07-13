class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :athlete_id, :deal_id

  belongs_to :athlete
  belongs_to :deal
end
