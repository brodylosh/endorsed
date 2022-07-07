class CollaboratorSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :remote, :email, :phone_number, :username, :password
end
