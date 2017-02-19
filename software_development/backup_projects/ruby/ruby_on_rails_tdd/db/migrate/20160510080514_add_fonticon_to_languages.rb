class AddFonticonToLanguages < ActiveRecord::Migration
  def change
    add_column :languages, :fonticon, :string
  end
end
