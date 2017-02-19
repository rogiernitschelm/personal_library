class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.integer :step_number
      t.text :description
      t.text :code
      t.references :tutorial, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
