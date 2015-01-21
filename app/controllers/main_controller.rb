class MainController < ApplicationController
  def index
    @posts = Post.order('created_at DESC').all
  end
end
