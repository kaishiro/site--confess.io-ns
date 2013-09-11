class PostsController < ApplicationController
  def index
    redirect_to root_path
  end

  def new
    @posts = Post.all
    @post = Post.new
  end

  def create
    @posts = Post.all
    @post = Post.new(post_params)

    if @post.save
      redirect_to posts_path
    else
      render 'new'
    end
  end

  private
    def post_params
      params.require(:post).permit!
    end
end
