class CreateStocks < ActiveRecord::Migration[7.0]
  def change
    create_table :stocks do |t|
      t.integer :price
      t.integer :volume
      t.integer :change
      t.integer :todays_open
      t.integer :previous_close
      t.integer :intraday_high
      t.integer :intraday_low
      t.integer :fiftytwo_week_high
      t.integer :fiftytwo_week_low

      t.timestamps
    end
  end
end
