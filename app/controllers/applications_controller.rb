class ApplicationsController < ApplicationController

  def index
    @user = Box.new
  end

  def create_user
    @user = Box.new(params[:box])
    if @user.save
      redirect_to root_url
    end
  end

  def result

  end

end
