class Tutorial < ActiveRecord::Base
  mount_uploader :image, ImageUploader
  validates_presence_of :title, :description, :language_id
  belongs_to :language, dependent: :destroy
  has_many :steps

  def self.search(query)
    where("LOWER(title) ILIKE ?", "%#{query}%")
  end
end
