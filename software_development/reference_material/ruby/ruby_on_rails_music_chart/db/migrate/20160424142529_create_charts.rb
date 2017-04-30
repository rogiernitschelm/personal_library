class CreateCharts < ActiveRecord::Migration
  def change
    create_table :charts do |t|
      t.string :position1
      t.string :position2
      t.string :position3

      t.timestamps null: false
    end
  end
end
