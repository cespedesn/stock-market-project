class CreateWatchlists < ActiveRecord::Migration[7.0]
  def change
    create_table :watchlists do |t|
      t.string :ticker
      t.integer :price
      t.integer :volume
      t.integer :change
      t.integer :todays_open
      t.integer :previous_open
      t.integer :intraday_high
      t.integer :intraday_low
      t.integer :fiftytwo_week_high
      t.integer :fiftytwo_week_low

      t.timestamps
    end
  end
end
