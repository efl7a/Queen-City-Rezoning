class PetitionsController < ApplicationController
  def index
    puts params
    if params[:search]
      puts "searching for ${params[:search]}"
      render(
        status: 200,
        json: Petition.where(params[:search])
      )
    elsif params[:district]
      puts params[:district]
      render(
        status: 200,
        json: Petition.where(district: params[:district])
      )
    else
      render(
        status: 200,
        json: Petition.all
      )
    end
  end

end
