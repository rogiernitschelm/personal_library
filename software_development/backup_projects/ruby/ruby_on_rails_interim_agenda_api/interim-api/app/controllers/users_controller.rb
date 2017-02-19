class UsersController < ApplicationController

  def index
    @users = User.all

    respond_to do |format|
      format.html
      format.json {render json: @users }
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: { user: @user }, status: :created # 201
    else
      render json: { errors: @user.errors }, status: :unprocessible_entity # 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  protected

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

end
