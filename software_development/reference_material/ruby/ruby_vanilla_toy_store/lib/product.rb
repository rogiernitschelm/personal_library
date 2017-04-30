class Product
  attr_reader :title, :price, :stock, :sale
  attr_accessor :stock # needed because a transaction reduces the stock of a toy

  @@products = []
  @@discounts = []

  def initialize(options={})
    @title = options[:title]
    @price = options[:price]
    @stock = options[:stock]
    add_to_products
  end

  def self.all
    @@products
  end 

  def in_stock?
    if @stock > 0
      return true
    else
      return false      
    end
  end

  def self.in_stock
    stock_list = []
    @@products.each do |item|
      if item.stock > 0
        stock_list.push(item)
      end
    end
    return stock_list
  end

  def discount(price)
    @price = price
    @@discounts << self
    puts "The following product has been added to the sales-collection :#{self.title} with a price of $ #{self.price}"
    puts "The sales-collection now contains the following items: #{@@discounts}"
  end

  private

  def add_to_products  	
  	if @@products.any?{|p| p.title == @title}
  		raise DuplicateProductError, "DuplicateProductError: #{@title} already exists."
  	else
  		@@products << self
  		end
  end

  def self.find_by_title(title)     
    index = 0
    while index < @@products.length 
      unless @@products[index].title != title
        return @@products[index]        
      end
      index +=1
    end 
    return @@products[index]
  end
end