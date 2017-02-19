class AddLanguageToTutorials < ActiveRecord::Migration
  def change
    add_reference :tutorials, :language, index: true, foreign_key: true
  end
end
