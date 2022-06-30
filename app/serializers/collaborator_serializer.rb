class CollaboratorSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :remote, :email, :phone_number, :is_athlete
end
