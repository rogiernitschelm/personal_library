Rails.application.routes.draw do

  get 'landing/index'
  get 'chart/index'
  devise_for :users

  get 'songs/index' => 'songs#index'
  get 'songs' => 'songs#index'
  get 'songs/new' => 'songs#new', as: :new_song
  post 'songs' => 'songs#create'
  patch 'songs/:id' => 'songs#update'
  get 'songs/:id/edit' => 'songs#edit', as: :edit_song
  delete 'songs/:id' => 'songs#destroy'
  get 'songs/:id' => 'songs#show', as: :song

  get 'artists/index' => 'artists#index'
  get 'artists' => 'artists#index'
  get 'artists/new' => 'artists#new', as: :new_artist
  post 'artists' => 'artists#create'
  patch 'artists/:id' => 'artists#update'
  get 'artists/:id/edit' => 'artists#edit', as: :edit_artist
  delete 'artists/:id' => 'artists#destroy'
  get 'artists/:id' => 'artists#show', as: :artist

  root 'landing#index'

end
