class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :shares, :equity, :average_cost, :todays_return, :total_return
end
