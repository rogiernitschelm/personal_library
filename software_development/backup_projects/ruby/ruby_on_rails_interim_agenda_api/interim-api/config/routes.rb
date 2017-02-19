Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations'}
  devise_for :freelancers, :employers, :skip => :sessions

  resources :employers
  resources :freelancers
  resources :jobs
  resources :users

end
