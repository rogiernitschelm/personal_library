class Artist < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  has_many :songs, dependent: :destroy

  def self.search(query)
  where("LOWER(name) ILIKE ?", "%#{query}%")
  end
end
