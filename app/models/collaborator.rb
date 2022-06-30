class Collaborator < ApplicationRecord
    has_one_attached :image
    has_many :deals
    has_many :applications, through: :deals
    has_many :athletes, through: :deals
end
