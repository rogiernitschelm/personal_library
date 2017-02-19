class StepsController < ApplicationController
  def index
    @steps = Step.order(:step_number)
  end

  def show
    @step = Step.find(params[:id])
  end

  def edit
    @step = Step.find(params[:id])
  end

  def update
    @step = Step.find(params[:id])
    if @step.update_attributes(step_params)
      redirect_to @step
    else
      render 'edit'
    end
  end

  def new
    @step = Step.new
  end

  def create
    @step = Step.new(step_params)

    if @step.save
      redirect_to @step
    else
      render 'new'
    end
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy
    redirect_to steps_path
  end

  # Currently no destroy-method, because I don't want people to be able to destroy for now

  private

  def step_params
    params.require( :step ).permit(:step_number, :description, :code, :tutorial_id)
  end

end
