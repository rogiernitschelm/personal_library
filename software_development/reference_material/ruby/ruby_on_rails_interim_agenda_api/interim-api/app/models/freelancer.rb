class Freelancer < User
  validates_presence_of :gender, :education, :field, :availability, :pay_rate, on: :update
  validates :availability, inclusion: { in: %w(Available Unavailable Soon),
    message: "%{value} is not a valid availability type"}, on: :update
  validates :gender, inclusion: { in: %w(Male Female Undefined),
    message: "%{value} is not a valid gender" }, on: :update
  validates :education, inclusion: { in: %w(LBO MBO HBO Academic),
    message: "%{value} is not a valid education"}, on: :update

  def self.search(query)
    where("last_name ILIKE ? OR business ILIKE ? OR field ILIKE ? ", "%#{query}%", "%#{query}%", "%#{query}%")
  end
end
