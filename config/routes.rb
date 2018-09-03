Rails.application.routes.draw do
  scope '/api' do
    get :petitions, to: 'petitions#index'
    get :comments, to: 'comments#index'
    post :comments, to: 'comments#create'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
