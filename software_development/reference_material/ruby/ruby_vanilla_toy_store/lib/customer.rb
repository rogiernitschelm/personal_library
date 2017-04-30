class Customer
	attr_reader :name, :product

	@@customers = []

	def initialize(name)
		@name = name
		add_to_customers
	end

	def self.all
		@@customers
	end

  def purchase(product)
    @product = product
    Transaction.new(self, product)
  end

	def add_to_customers
  	if @@customers.any?{|p| p.name == @name}
  		raise DuplicateCustomerError, "DuplicateCustomerError: #{@title} already exists."
  	else
  		@@customers << self
		end
	end

	def self.find_by_name(title)
    index = 0
    while index < @@customers.length
      if @@customers[index].name ==  title
        return @@customers[index]
      end
      return @@customers[index]
      index +=1
    end
  return @@customers[index]
  end
end
