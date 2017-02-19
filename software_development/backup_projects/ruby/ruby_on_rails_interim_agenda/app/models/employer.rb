class Employer < User
  has_many :jobs, dependent: :destroy
  has_many :favorites
  has_many :freelancers, through: :favorites, dependent: :destroy
  validates_presence_of :company_name, :location, on: :update

  def self.search(query)
    where("company_name ILIKE ? OR business ILIKE ? OR field ILIKE ? ", "%#{query}%", "%#{query}%", "%#{query}%")
  end
end
