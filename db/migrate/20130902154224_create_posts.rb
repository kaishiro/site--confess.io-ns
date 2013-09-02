class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :token
      t.string :verb
      t.text :body
      t.string :image
      t.string :ip
      t.string :country

      t.timestamps
    end
  end
end
