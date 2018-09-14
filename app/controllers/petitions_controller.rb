class PetitionsController < ApplicationController
  def index
    puts params
    if params[:search]
      puts "searching for ${params[:search]}"
      render(
        status: 200,
        json: Petition.where('keywords LIKE ?', '%' + params[:search] + '%').all
      )
    # elsif params[:district]
    #   puts params[:district]
    #   render(
    #     status: 200,
    #     json: Petition.where(district: params[:district])
    #   )
    else
      render(
        status: 200,
        json: Petition.all
      )
    end
  end
end
