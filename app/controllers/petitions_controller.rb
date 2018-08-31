class PetitionsController < ApplicationController
  def index
    render(
      status: 200,
      json: Petition.all
    )
  end
end
