class FreelancersController < ApplicationController

  def index
    @freelancers = Freelancer.all

    respond_to do |format|
      format.html
      format.json {render json: @freelancers }
    end
  end
end
