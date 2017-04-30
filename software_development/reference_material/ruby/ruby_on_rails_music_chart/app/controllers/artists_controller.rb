class ArtistsController < ApplicationController
  before_action :authenticate_user!

  def index
    @artists = Artist.all
    if params[:search]
      @artists = Artist.search(params[:search]).order("created_at DESC")
    else
      @artists = Artist.all.order('created_at DESC')
    end
  end

  def show
    @artist = Artist.find(params[:id])
  end

  def new
    @artist = Artist.new
  end

  def update
    @artist = Artist.find(params[:id])
    if @artist.update_attributes(artist_params)
      redirect_to @artist
    else
      render 'edit'
    end
  end

  def edit
    @artist = Artist.find(params[:id])
  end

  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      redirect_to @artist
    else
      render 'new'
    end
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect_to artists_path
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :description, :image)
  end
end
