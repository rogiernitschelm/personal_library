class Tribe
	attr_reader :name 
	attr_accessor :members
	
	def initialize(hash)	
		@name = hash[:name]
		@members = hash[:members]	
		@immune_array = @members
		created_team = @members.map{ |person| "#{person.to_s.capitalize}"}.join(", ")		
		puts "\n\n\nFROM THE POOLS OF CREATION ARISES A NEW TRIBE:\n\n#{@name}\n\nWITH THE FOLLOWING HEROES: \n\n#{created_team}\n"
	end

	def to_s
		@name
	end

	def delete(member)
		@members.delete(member)
	end

	def tribal_council(immune={})
		@members.reject{ |member| member == immune[:immune]}.sample			
	end
end