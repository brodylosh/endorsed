Athlete.destroy_all
Collaborator.destroy_all
Deal.destroy_all
Application.destroy_all

#Athletes

athlete1 = Athlete.create(first_name: 'Brody', last_name: 'Losh', university: 'Michigan State University', sport: 'Basketball', year: 'Graduate', birthday: DateTime.now.utc, gender: 'Male', bio: 'A graduate student-athlete with a large social footprint, seeking brands to collaborate with', email: 'brodylosh@gmail.com', phone_number: '2486138800', username: 'brodylosh', password: 'BrodyLosh123!', athlete: true)

#Collaborators

collaborator1 = Collaborator.create(name: 'Rick\'s American Cafe', address: '224 Abbot Rd.', city: 'East Lansing', state: 'Michigan', remote: false, email: 'ricks@ricksamericancafe.com', phone_number: '5173512285', username: 'ricksamericancafe', password: 'RicksAmericanCafe123!')

#Deals

deal1 = Deal.create(collaborator_id: 1, athlete_id: 1, title: 'Autographs at Rick\'s', offer: 100, description: 'Seeking an MSU, male, athlete to sign autographs', criteria: 'MSU student athlete, male, graduate', sport: 'Basketball', year: 'Graduate', age: 28, gender: 'Male', expiration_date: DateTime.now.utc, location: 'Rick\'s', completed: false)

#Applications

