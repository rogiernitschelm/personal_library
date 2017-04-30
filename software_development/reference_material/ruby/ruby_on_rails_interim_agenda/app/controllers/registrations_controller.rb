class RegistrationsController < Devise::RegistrationsController

  private

  # params that are allowed on creation

  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :type)
  end

  # all params that are allowed to be inserted when updating account

  def account_update_params
    params.require(:user).permit(
    :first_name,
    :last_name,
    :company_name,
    :location,
    :email,
    :password,
    :password_confirmation,
    :current_password,
    :description,
    :business,
    :birth_date,
    :gender,
    :education,
    :field,
    :pay_rate,
    :availability,
    :description
    )
  end
end
