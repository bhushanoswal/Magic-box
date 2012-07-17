class CreateBoxes < ActiveRecord::Migration
  def change
    create_table :boxes do |t|
      t.string :name
      t.datetime :time
      t.int :score

      t.timestamps
    end
  end
end
