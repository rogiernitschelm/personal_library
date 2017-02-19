class TutorialsController < ApplicationController
  def index
    @tutorials = Tutorial.all
    if params[:search]
      @tutorials = Tutorial.search(params[:search]).order("created_at DESC")
    else
      @tutorials = Tutorial.all.order('created_at DESC')
    end
  end

  def show
    @tutorial = Tutorial.find(params[:id])
  end

  def edit
    @tutorial = Tutorial.find(params[:id])
  end

  def update
    @tutorial = Tutorial.find(params[:id])
    if @tutorial.update_attributes(tutorial_params)
      redirect_to @tutorial
    else
      render 'edit'
    end
  end

  def new
    @tutorial = Tutorial.new
  end

  def create
    @tutorial = Tutorial.new(tutorial_params)

    if @tutorial.save
      redirect_to tutorials_path
    else
      render 'new'
    end
  end

  # Destroy will be implemented when registration is finished
  # Only admins should be able to destroy tutorials.

  private

  def tutorial_params
    params.require( :tutorial ).permit(:title, :description, :language_id, :image)
  end

end
