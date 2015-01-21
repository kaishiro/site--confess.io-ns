class Post < ActiveRecord::Base
  has_many :comments
  has_many :votes
  validates :body, presence: true
end
