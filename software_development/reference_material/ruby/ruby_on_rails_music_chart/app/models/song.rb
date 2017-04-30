class Song < ActiveRecord::Base
  belongs_to :artist

  def self.search(query)
  where("LOWER(title) ILIKE ?", "%#{query}%")
  end
end
