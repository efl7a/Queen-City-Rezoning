class CommentsController < ApplicationController
  def index
    render(
      status: 200,
      json: Comment.all
    )
  end
end