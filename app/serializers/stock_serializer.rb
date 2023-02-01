class StockSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :price, :volume, :change, :todays_open, :previous_close, :intraday_high, :intraday_low, :fiftytwo_week_high, :fiftytwo_week_low
end
