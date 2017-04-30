class RemoveStringFromEmployer < ActiveRecord::Migration
  def change
    remove_column :employers, :string, :string
  end
end
