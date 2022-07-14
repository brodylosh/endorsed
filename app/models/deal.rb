class Deal < ApplicationRecord
    belongs_to :collaborator
    belongs_to :athlete, optional: true
    has_many :applications
    has_many :athletes, through: :applications
end
