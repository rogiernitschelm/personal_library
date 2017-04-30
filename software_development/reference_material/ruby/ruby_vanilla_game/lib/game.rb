class Game
	attr_reader :tribes

	def initialize(*tribes)
		@tribes = tribes						
	end
	def add_tribe(tribe)
		@tribes << tribe
	end
	def immunity_challenge
		@tribes.sample
	end
	def clear_tribes
		@tribes.clear
	end
	def merge(new_tribe)							
		merged_tribe = Tribe.new({name: new_tribe, members: merged_members})
		clear_tribes
		add_tribe(merged_tribe)
		return @tribes[0]
	end

	def merged_members
		members = []
		@tribes.each { |tribe| members << tribe.members }	
		members.flatten!
	end

	def individual_immunity_challenge
		merged_members.sample
	end
end