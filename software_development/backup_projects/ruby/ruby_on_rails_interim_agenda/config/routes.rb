Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations'}
  devise_for :freelancers, :employers, :skip => :sessions

  resources :employers
  resources :freelancers
  resources :jobs
  resources :favorites, only: [:create, :destroy]

  resources :conversations, only: [:index, :show, :destroy] do
    member do
      post :reply
      post :restore
      post :mark_as_read
    end
    collection do
      delete :empty_trash
    end
  end
  resources :messages, only: [:new, :create]

  root 'landing#index'

end
