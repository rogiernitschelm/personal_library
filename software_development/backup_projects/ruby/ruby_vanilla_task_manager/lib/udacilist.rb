class UdaciList
  attr_reader :title, :items
  
  # To ensure it displays "Untitled list if no title is given"
  
  def initialize(title="Untitled list", options={}) 
    @title = title
    @items = []
  end
  
  def add(type, description, options={})
    type = type.downcase    
    priority = options[:priority]
    unless (type == "todo") || (type =="event") || (type =="link")
      raise UdaciListErrors::InvalidItemType
    end   
    unless (priority == "high") || (priority == "low") || (priority == "medium") || (!priority)
      raise UdaciListErrors::InvalidPriorityValue 
    end
    @items.push TodoItem.new(description, options) if type == "todo"
    @items.push EventItem.new(description, options) if type == "event"
    @items.push LinkItem.new(description, options) if type == "link"
  end
  
  def delete(index)
    if @items.length <= index - 1
      raise UdaciListErrors::IndexExceedsListSize, "Index exceeds list size"
    end
    @items.delete_at(index - 1)
  end

  def filter(action)
    @title = "Filter list"
    filter_list = []    
    
    if action.downcase == "event"
      filter_list = (@items.select { |item| item.class == EventItem})
    elsif action.downcase =="todo"
      filter_list= (@items.select { |item| item.class == TodoItem})
    else action.downcase =="link"
      filter_list = (@items.select { |item| item.class == LinkItem})
    end   
    all(filter_list) 
  end
  
  def all(list=@items) # gave this one a optional argument to be able to use it with the filter method.
    puts 
    puts "-" * @title.length * 5
    titleAscii = Artii::Base.new
    puts titleAscii.asciify(@title)
    puts "-" * @title.length * 5
    puts 
    list.each_with_index do |item, position|      
      puts "#{position + 1}) #{item.details}"
      puts
    end
  end

   # find method

   def find_method(index)
    puts "Found the following item:"
    puts @items[index].details
  end


end
