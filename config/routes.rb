Rails.application.routes.draw do
  resources :applications
  resources :collaborators
  resources :deals
  resources :athletes

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # post "/signup", to: "athletes#create"
  get "/me", to: "athletes#show"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }


end
