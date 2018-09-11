class PetitionsController < ApplicationController
  def index
    if params[:search]
      puts "searching for ${params[:search]}"
      render(
        status: 200,
        json: Petition.all(params[:search])
      )
    elsif params[:district]
      render(
        status: 200,
        json: Petition.all(district: params[:district])
      )
    else
      render(
        status: 200,
        json: Petition.all
      )
    end
  end

end
