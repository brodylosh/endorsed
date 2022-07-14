class Deal < ApplicationRecord
    belongs_to :collaborator
    belongs_to :athlete, optional: true
    has_many :applications
    has_many :athletes, through: :applications

    # validates :title, presence: true
    # validates :description, presence: true
    # validates :offer, presence: true
    # validates :expiration_date, presence: true
    # validates :location, presence: true
end
