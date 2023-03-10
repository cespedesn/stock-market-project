class ApplicationController < ActionController::API
    include ActionController::Cookies

    #This code is a method call that is used in the Ruby on Rails framework. It is used to call a method (in this case, "authorized") before any other action is taken. This is typically used to ensure that a user is authorized to perform a certain action.
before_action :authorized

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def authorized
        return render json: { error: "Access Denied" }, status: :unauthorized unless session.include? :user.id
    end

    def current_user 
        user = User.find_by(id: session[:user_id])
    end

    private 

    def render_not_found(exception) 
        render json: { error: "#{exception.model} not found"}, status: :not_found
    end

    def render_invalid(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
