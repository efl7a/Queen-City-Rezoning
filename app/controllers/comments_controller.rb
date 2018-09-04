class CommentsController < ApplicationController
  def index
    render(
      status: 200,
      json: Comment.all
    )
  end

  def create
    puts params
    @comment = Comment.new(comment_params)
    if @comment.save
      render(
        status: 200,
        json: Comment.all
      )
    else
      render(
        status: 400,
        json: @comment.errors
      )
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :petition_id)
  end

end
