class ChartController < ApplicationController
  before_action :authenticate_user!

  def index
    @chart = Chart.first
  end

end
