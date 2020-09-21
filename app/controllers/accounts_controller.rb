class AccountsController < ApplicationController


  def create
    @account = Account.new(account_params)
    if @account.save
      render :show
    else
      render json: @account.errors.full_messages, status: 401
    end  
  end  

  def show
    @account = Account.find(params[:id])
    render :show
  end  

  def account_params
    params.require(:account).permit(:first_name, :last_name, :email, :password_digest, :birthdate)
  end  

end
