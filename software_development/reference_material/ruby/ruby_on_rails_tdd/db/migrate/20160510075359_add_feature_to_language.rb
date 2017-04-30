class AddFeatureToLanguage < ActiveRecord::Migration
  def change
    add_column :languages, :feature, :text
  end
end
