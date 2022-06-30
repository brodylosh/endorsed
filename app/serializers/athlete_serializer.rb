class AthleteSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :university, :sport, :class, :birthday, :gender, :bio, :email, :phone_number, :username, :password, :is_athlete
end
