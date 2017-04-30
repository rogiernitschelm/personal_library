class AddFirstNameToUser < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :birth_date, :date
    add_column :users, :gender, :string
    add_column :users, :education, :string
    add_column :users, :business, :string
    add_column :users, :field, :string
    add_column :users, :description, :text
    add_column :users, :availability, :string
    add_column :users, :pay_rate, :integer
  end
end
