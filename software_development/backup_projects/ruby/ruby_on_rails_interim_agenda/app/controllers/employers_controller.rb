class EmployersController < ApplicationController
  before_action :authenticate_user!

  def index
    @employers = Employer.all
    if params[:search]
      @employers = Employer.search(params[:search]).order("created_at DESC")
    else
      @employers = Employer.all.order('created_at DESC')
    end
  end

  def show
    @employer = Employer.find(params[:id])
  end

  def destroy
    @employer = Employer.find(params[:id])
    @employer.destroy
    redirect_to employers_path
  end

end
