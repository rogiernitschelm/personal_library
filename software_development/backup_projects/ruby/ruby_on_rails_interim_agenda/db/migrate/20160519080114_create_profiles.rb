class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :display_name
      t.integer :phone
      t.date :birth_date
      t.string :gender
      t.string :education
      t.string :availability
      t.string :business
      t.string :field
      t.text :description
      t.integer :pay_rate

      t.timestamps null: false
    end
  end
end
