class CreateApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :applications do |t|
      t.integer :athlete_id
      t.integer :deal_id

      t.timestamps
    end
  end
end
