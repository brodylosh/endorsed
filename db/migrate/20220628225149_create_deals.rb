class CreateDeals < ActiveRecord::Migration[7.0]
  def change
    create_table :deals do |t|
      t.integer :collaborator_id
      t.integer :athlete_id
      t.string :title
      t.integer :offer
      t.string :description
      t.string :university
      t.string :sport
      t.string :year
      t.integer :age
      t.string :gender
      t.date :expiration_date
      t.string :location
      t.boolean :completed
      t.integer :application_id

      t.timestamps
    end
  end
end
