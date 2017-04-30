class CreateEmployers < ActiveRecord::Migration
  def change
    create_table :employers do |t|
      t.string :company_name
      t.string :string
      t.string :head_office
      t.text :description

      t.timestamps null: false
    end
  end
end
