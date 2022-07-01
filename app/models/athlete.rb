class Athlete < ApplicationRecord
    has_one_attached :image
    has_many :applications
    has_many :deals, through: :applications 
    has_many :collaborators, through: :deals

    validates :username, presence: true, uniqueness: true, length: { maximum: 20 }
end
