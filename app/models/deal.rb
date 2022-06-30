class Deal < ApplicationRecord
    belongs_to :collaborator
    has_many :applications
    has_many :athletes, through: :applications
end
