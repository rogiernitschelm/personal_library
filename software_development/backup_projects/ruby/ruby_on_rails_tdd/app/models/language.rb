class Language < ActiveRecord::Base
  validates_presence_of :name, :description
  has_many :tutorials

  def self.search(query)
    where("LOWER(name) ILIKE ?", "%#{query}%")
  end
end
