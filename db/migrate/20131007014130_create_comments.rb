class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :token
      t.string :emotion
      t.text :body
      t.string :ip
      t.string :country
      t.references :post, index: true

      t.timestamps
    end
  end
end
