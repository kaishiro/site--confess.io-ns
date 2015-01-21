class PostsController < ApplicationController
  def index
    redirect_to root_path
  end

  def new
    @posts = Post.order('created_at DESC').all
    @post = Post.new
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    redirect_to root_path
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to root_path
    end
  end

  def show
    @post = Post.find(params[:id])
    @post_url = "http://confessions.0/posts/" + @post.id.to_s
    @comments = @post.comments
  end

  private
    def post_params
      params.require(:post).permit!
    end
end
