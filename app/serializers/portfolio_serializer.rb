class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :shares, :equity, :average_const, :todays_return, :total_return
end
