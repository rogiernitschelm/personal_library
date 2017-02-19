class Jury
	attr_accessor :members
	
	def initialize	
		@members = []
		@finalists = {}
		@final_array = []
		@votes_finalists = [0, 0]		
	end
	
	def add_member(member)
		@members << member
	end

	def cast_votes(finalists)
		@members.each do |member|
			random_vote = rand(2) # this may only be called once per sequence	
			random_vote == 1 ? @votes_finalists[0] +=1 : @votes_finalists[1] +=1
			puts "#{member.to_s.capitalize} voted: #{finalists[random_vote]}"
		end	
		finalists.each_with_index do |finalist, index|
			@finalists[finalist] = @votes_finalists[index]		
			@final_array << finalist		
		end	
		announce_winner(@finalists)
		return @finalists 		
	end

	def report_votes(finalists)		
		puts "The final score for #{@final_array[1].to_s.capitalize} is #{@votes_finalists[0]}".green
		puts "The final score for #{@final_array[0].to_s.capitalize} is #{@votes_finalists[1]}".green
	end

	def announce_winner(finalists)		
		finalists.each do |finalist|
			if finalist[1] >= 4
				return finalist[0]
			end
		end	
	end
end