class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string :token
      t.integer :value
      t.references :post, index: true

      t.timestamps
    end
  end
end
