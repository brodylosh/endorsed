Athlete.destroy_all
Collaborator.destroy_all
Deal.destroy_all
Application.destroy_all

#Athletes

50.times do
    Athlete.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, university: Faker::University.name, sport: 'Basketball', year: 'Graduate', birthday: Faker::Date.birthday(min_age: 14, max_age: 30), gender: Faker::Gender.binary_type, bio: Faker::Lorem.paragraph(sentence_count: 2), email: Faker::Internet.email(name: "#{:first_name}#{:last_name}", domain: 'gmail'), phone_number: Faker::PhoneNumber.cell_phone, username: "#{:first_name}#{:last_name}", password: "#{:first_name}#{:last_name}123!", athlete: true)
end

#Collaborators

30.times do
    Collaborator.create(name: Faker::Company.name, address: Faker::Address.full_address, remote: Faker::Boolean.boolean, email:Faker::Internet.email(name: "#{:name.downcase}", domain: 'gmail'), phone_number: Faker::PhoneNumber.cell_phone, username: "#{:name.downcase}", password: "#{:name.downcase}123!")
end

#Deals

deal1 = Deal.create(collaborator_id: 1, athlete_id: 1, title: 'Autographs at Rick\'s', offer: 100, description: 'Seeking an MSU, male, athlete to sign autographs', criteria: 'MSU student athlete, male, graduate', sport: 'Basketball', year: 'Graduate', age: 28, gender: 'Male', expiration_date: DateTime.now.utc, location: 'Rick\'s', completed: false)

#Applications





# # Random University Name
# Faker::University.name #=> "South Texas College"

# Faker::Address.full_address

# Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "jpg")

# Faker::Boolean.boolean

# Faker::Company.logo

# Faker::Company.name

# # Random date in the future (up to maximum of N days)
# # Keyword arguments: days
# Faker::Date.forward(days: 23) # => "Fri, 03 Oct 2014"

# # Random birthday date (maximum age between 18 and 65)
# # Keyword arguments: min_age, max_age
# Faker::Date.birthday(min_age: 14, max_age: 30) #=> "Fri, 28 Mar 1986"

# Faker::Demographic.sex

# Faker::Gender.type

# Faker::Gender.binary_type

# Faker::Name.first_name 

# Faker::Name.last_name 

# Faker::PhoneNumber.cell_phone
