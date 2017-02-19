class AddCompanyNameToUser < ActiveRecord::Migration
  def change
    add_column :users, :company_name, :string
    add_column :users, :location, :string
    remove_column :employers, :company_name
    remove_column :employers, :head_office
    remove_column :employers, :description
    remove_column :freelancers, :first_name
    remove_column :freelancers, :last_name
    remove_column :freelancers, :birth_date
    remove_column :freelancers, :gender
  end
end
