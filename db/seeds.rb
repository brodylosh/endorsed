# Athlete.destroy_all
# Collaborator.destroy_all
# Deal.destroy_all
# Application.destroy_all

# sports = ["Basketball", "Baseball", "Softball", "Football", "Cross Country", "Field Hockey", "Bowling", "Golf", "Fencing", "Lacrosse", "Soccer", "Gymnastics", "Rowing", "Volleyball", "Hockey", "Water Polo", "Tennis", "Skiing", "Track and Field", "Swimming and Diving", "Wrestling"]
# year = ["Recruit", "Freshman", "Sophomore", "Junior", "Senior", "Graduate"]
# gender = ["Male", "Female", "Non-Binary"]

#Athletes

# 12.times do
#     Athlete.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, school: Faker::University.name, sport: sports.sample, year: year.sample, birthday: Faker::Date.birthday(min_age: 14, max_age: 30), gender: gender.sample, bio: Faker::Lorem.paragraph(sentence_count: 2), email: Faker::Internet.email(domain: 'gmail.com'), phone_number: Faker::PhoneNumber.cell_phone, username: Faker::Twitter.screen_name, password: 'Test123!', athlete: true)
# end

#Collaborators

# Collaborator.create!(name: 'Ricks American Cafe', address: '224 Abbot Rd, East Lansing, MI 48823', remote: false, email: 'ricks@ricksamericancafe.com', phone_number: '(517) 351-2285', username: "ricksamericancafe", password: "RicksAmericanCafe123!")

# 12.times do
#     Collaborator.create(name: Faker::Company.name, address: Faker::Address.full_address, remote: Faker::Boolean.boolean, email: Faker::Internet.email(domain: 'gmail.com'), phone_number: Faker::PhoneNumber.cell_phone, username: Faker::Twitter.screen_name, password: "Test123!")
# end

#Deals

30.times do
    Deal.create(collaborator_id: Faker::Number.between(from: 1, to: 20), athlete_id: 1, title: Faker::Lorem.sentence, offer: Faker::Number.between(from: 1, to: 1000), description: Faker::Lorem.paragraph(sentence_count: 2), school: '', sport: '', year: '', age: 0, gender: '', expiration_date: Faker::Date.between(from: 2.week.from_now, to: 7.week.from_now), location: Faker::Address.full_address, completed: false)
end

