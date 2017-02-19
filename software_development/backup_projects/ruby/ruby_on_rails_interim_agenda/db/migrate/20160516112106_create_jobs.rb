class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :title
      t.date :start_date
      t.references :employer, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
