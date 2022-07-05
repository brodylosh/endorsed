class CreateCollaborators < ActiveRecord::Migration[7.0]
  def change
    create_table :collaborators do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.boolean :remote
      t.string :email
      t.string :phone_number
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
