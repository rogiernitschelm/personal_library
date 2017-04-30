Rails.application.routes.draw do

  devise_for :users
  root 'languages#index'

  resources :languages
  resources :tutorials
  resources :steps

end
