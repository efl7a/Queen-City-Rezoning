class PetitionsController < ApplicationController
  def index
    puts params
    if params["sort"] === "number"
      render(
        status: 200,
        json: Petition.order(:number)
      )
    elsif params["sort"] === "district"
      render(
        status: 200,
        json: Petition.order(:district)
      )
    end
  end
end
