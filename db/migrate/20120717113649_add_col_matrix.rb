class AddColMatrix < ActiveRecord::Migration
  def change
  add_column :boxes, :matrix, :integer
  end

end
