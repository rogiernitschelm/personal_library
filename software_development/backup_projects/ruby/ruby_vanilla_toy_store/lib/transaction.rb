class Transaction
	attr_reader :product, :customer, :id
	attr_accessor :transactions

	@@transactions = []
	@@id = 1

	def initialize(customer, product)
		@id = @@id
		@@id += 1
		@customer = customer
		@product = product
		modify_stock
		@@transactions << self	# add to transactions-array
	end

	def modify_stock
		if @product.stock == 1
			@product.stock -=1
			puts "WARNING: STOCK IS EMPTY NOW. PLEASE ORDER NEW #{@product.title}."
		elsif @product.stock > 0
			@product.stock -=1
		else
			raise OutOfStockError, "OutOfStockError: #{@product.title} is out of stock."
		end
	end

	def self.all
		@@transactions
	end

	def self.find(index)
		return @@transactions[index - 1]
	end
end
