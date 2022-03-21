Rails.application.routes.draw do
  resources :hiraganas

  get '/hello', to: 'application#hello_world'
  get '/soundcategories', to: "hiraganas#soundcategories"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
  # Defines the root path route ("/")
  # root "articles#index"
end
