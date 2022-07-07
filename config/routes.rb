Rails.application.routes.draw do
  resources :applications
  resources :collaborators
  resources :deals
  resources :athletes

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#me"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }


end
