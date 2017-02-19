class AddTypeToUser < ActiveRecord::Migration
  def change
    add_column :users, :type, :string
    add_column :users, :company_name, :string
    add_column :users, :location, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :birth_date, :date
    add_column :users, :gender, :string
    add_column :users, :education, :text
    add_column :users, :business, :string
    add_column :users, :field, :string
    add_column :users, :description, :text
    add_column :users, :availability, :string
    add_column :users, :pay_rate, :integer
  end
end
