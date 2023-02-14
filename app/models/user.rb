class User < ApplicationRecord
    has_one :portfolio
    has_many :stocks, through: :portfolio

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 4 }, on: :create
    validates :firstname, presence: true, uniqueness: true
    validates :lastname, presence: true, uniqueness: true 
end
