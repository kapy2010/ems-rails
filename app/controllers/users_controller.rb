class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  respond_to :json

  def index
    @users = User.all
    respond_with(@users) do |format|
      format.json { render :json => @users.as_json }
      format.html
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: { user: @user.as_json, status: :true }
    else
      render json: { error: @user.errors.full_messages, status: :false }
    end
  end

  def show
    render json: @user.as_json
  end

  def destroy
    @user.destroy
    render json: { status: :ok }
  end

  def update
    if @user.update(user_params)
      render json: { status: :true }
    else
      render json: { error: @user.errors.full_messages, status: :false }
    end
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :firstname, :lastname, :phone, :active)
  end
end
