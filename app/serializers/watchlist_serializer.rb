class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :price, :volume, :change, :todays_open, :previous_open, :intraday_high, :intraday_low, :fiftytwo_week_high, :fiftytwo_week_low
end
