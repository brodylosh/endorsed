Rails.application.routes.draw do
  resources :applications, only: [:index, :show, :create, :destroy]
  resources :collaborators, only: [:index, :show, :create]
  resources :deals, only: [:index, :show, :create, :update]
  resources :athletes, only: [:index, :show, :create]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#me"
  get "/athletes/:id/deals", to: "athletes#show"
  get "/collaborators/:id/deals", to: "collaborators#show"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
