class CommentsController < ApplicationController
  def index
    render(
      status: 200,
      json: Comment.all
    )
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
      render(
        status: 200,
        json: Comment.all
      )
    else
      render(
        status: 400
      )
    end
  end

  private

  def comment_params
    params.require(:body).permit(:petition_id, :content)
  end
end
