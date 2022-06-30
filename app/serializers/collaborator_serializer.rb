class CollaboratorSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :remote, :email, :phone_number, :username, :password
end
