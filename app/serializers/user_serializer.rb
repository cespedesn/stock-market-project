class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :username, :email, :password
end
