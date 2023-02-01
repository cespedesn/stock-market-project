class CreatePortfolios < ActiveRecord::Migration[7.0]
  def change
    create_table :portfolios do |t|
      t.integer :shares
      t.integer :equity
      t.integer :average_cost
      t.integer :todays_return
      t.integer :total_return

      t.timestamps
    end
  end
end
