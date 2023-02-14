class UsersController < ApplicationController
    #This code skips the `authorized` action before the `create` and `show` actions, meaning that the `authorized` action will not be executed before those two actions.
skip_before_action :authorized, only: [:create, :show]

    # This code creates a new user using the parameters passed in the user_params method. If the user is valid, it will render a json response with the user object and a status of created. If the user is not valid, it will render a json response with the errors and a status of unprocessable_entity.
def create
        user = User.create!(user_params)
        byebug
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # This code checks if the user is logged in by finding the user with the id stored in the session. If the user is found, it renders the user's information as a json object with a token status. If the user is not found, it renders an error message with an unauthorized status.
def show
        current_user = User.find_by(id: session[:user_id])
        if current_user
            render json: current_user, status: :token
        else
            render json: { error "Not authorized" }, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:firstname, :lastname, :username, :email, :password)
    end
end
