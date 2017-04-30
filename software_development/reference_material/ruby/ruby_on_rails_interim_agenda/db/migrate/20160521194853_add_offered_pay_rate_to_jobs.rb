class AddOfferedPayRateToJobs < ActiveRecord::Migration
  def change
    add_column :jobs, :offered_pay_rate, :integer
  end
end
