class Box < ActiveRecord::Base
  attr_accessible :name, :score, :time, :matrix

  validates :name, :presence => true
  validates :matrix, :presence => true

  def self.create_magic_matrix(params)
    order = params[:order]
    @result = Array.new(order.to_i) {Array.new(order.to_i)}
    k = 0
    order.to_i.times do | i |
      order.to_i.times do | j |
        @result[i][j] = params[:"#{k}"]
        k=k+1
      end
    end

    @result
  end
end
