class Stock < ApplicationRecord
    belongs_to :watchlist
    belongs_to :portfolio
end
