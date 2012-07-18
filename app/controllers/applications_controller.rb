class ApplicationsController < ApplicationController

  def index
    @user = Box.new
  end

  def create_user
    @user = Box.new(params[:box])
    @user.save
  end

  def input
   @result = Box.create_magic_matrix(params)

  end

  def result
  end

end
