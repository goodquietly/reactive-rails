Rails.application.routes.draw do
  root 'index#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :contacts, only: %i[create index]
    end
  end
end
