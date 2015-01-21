class CommentsController < ApplicationController
  def index
    @post = Post.find(params[:post_id])
  end

  def create
    @post = Post.find(params[:post_id])

    @comment = @post.comments.create(params[:comment].permit(:commenter, :body, :emotion))

    redirect_to post_path(@post)

    respond_to do |format|
      format.html
      format.json { render json: @comment }
      format.js
    end
  end

  def new
    @comment = Comment.new

  end

end
