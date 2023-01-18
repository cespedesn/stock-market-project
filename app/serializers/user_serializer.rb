class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :username, :email, :password_digest
end
