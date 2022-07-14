class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :athlete_id, :deal_id, :athlete

  def athlete
    object.athlete
  end

  belongs_to :athlete
  belongs_to :deal
end
