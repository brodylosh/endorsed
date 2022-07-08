class CollaboratorSerializer < ActiveModel::Serializer
  attributes :id, :name,:image_url, :address, :remote, :email, :phone_number, :username, :password
end
