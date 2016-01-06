Rails.application.routes.draw do
  root 'application#angular'

  resources :users
end
