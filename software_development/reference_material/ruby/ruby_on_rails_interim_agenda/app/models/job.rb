class Job < ActiveRecord::Base
  validates_presence_of :title, :start_date, :offered_pay_rate, :job_description
  belongs_to :employer, dependent: :destroy
end
