class AddImageToUsers < ActiveRecord::Migration
  def change
    add_column :users, :image, :string
    add_column :users, :user_name, :string
    add_column :users, :description, :text
    add_column :users, :birth_date, :date
    add_column :users, :gender, :string
  end
end
