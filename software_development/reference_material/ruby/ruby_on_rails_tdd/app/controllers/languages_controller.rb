class LanguagesController < ApplicationController
  def index
    @languages = Language.all
    if params[:search]
      @languages = Language.search(params[:search]).order("created_at DESC")
    else
      @languages = Language.all.order('created_at DESC')
    end
  end

  def show
    @language = Language.find(params[:id])
  end

  def edit
    @language = Language.find(params[:id])
  end

  def update
    @language = Language.find(params[:id])
    if @language.update_attributes(language_params)
      redirect_to @language
    else
      render 'edit'
    end
  end

  def new
    @language = Language.new
  end

  def create
    @language = Language.new(language_params)

    if @language.save
      redirect_to languages_path
    else
      render 'new'
    end
  end

  # Destroy will be implemented when registration is finished
  # Only admins should be able to destroy languages.

  private

  def language_params
    params.require( :language ).permit(:name, :description)
  end

end
