class Step < ActiveRecord::Base
  validates_presence_of :step_number, :description, :code, :tutorial_id
  belongs_to :tutorial, dependent: :destroy
end
