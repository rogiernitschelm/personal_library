class CreateFreelancers < ActiveRecord::Migration
  def change
    create_table :freelancers do |t|
      t.string :first_name
      t.string :last_name
      t.date :birth_date
      t.string :gender

      t.timestamps null: false
    end
  end
end
