class CreateAthletes < ActiveRecord::Migration[7.0]
  def change
    create_table :athletes do |t|
      t.string :first_name
      t.string :last_name
      t.string :university
      t.string :sport
      t.string :year
      t.date :birthday
      t.string :gender
      t.string :bio
      t.string :email
      t.string :phone_number
      t.string :username
      t.string :password
      t.boolean :athlete

      t.timestamps
    end
  end
end
