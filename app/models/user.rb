class User < ApplicationRecord
    has_one :portfolio
    has_many :stocks, through: :portfolio

    has_secure_password
end
