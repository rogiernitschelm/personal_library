class JobsController < ApplicationController
  def index
    @jobs = Job.all

    respond_to do |format|
      format.html
      format.json {render json: @jobs }
    end
  end
end
