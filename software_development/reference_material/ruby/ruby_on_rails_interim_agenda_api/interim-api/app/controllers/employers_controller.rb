class EmployersController < ApplicationController
  def index
    @employers = Employer.all

    respond_to do |format|
      format.html
      format.json {render json: @employers }
    end
  end
end
