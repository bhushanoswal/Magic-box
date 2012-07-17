class CreateBoxes < ActiveRecord::Migration
  def change
    create_table :boxes do |t|
      t.string :name
      t.datetime :time
      t.integer :score

      t.timestamps
    end
  end
end
