class TodoItem
  include Listable
  attr_reader :description, :due, :priority

  def initialize(description, options={})
    @type = "to-do stuff"
    @description = description
    @due = options[:due] ? Chronic.parse(options[:due]) : options[:due]
    @priority = options[:priority]
  end  
  def details    
    "(todo) " + format_description(@description) + "to-do stuff " + "due: " +
    format_date(@due) +
    format_priority(@priority)
  end
end
