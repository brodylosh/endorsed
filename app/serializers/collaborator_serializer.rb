class CollaboratorSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :address, :remote, :email, :phone_number, :username, :password

  has_many :deals
  has_many :athletes, through: :deals, source: :athlete
  has_many :applications, through: :deals, source: :applications
  # has_many :athletes, through: :deals, source: :applications
end
