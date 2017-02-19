require 'artii' #added to make each phase a little more distinct
require 'colorizr'
require_relative "game"
require_relative "tribe"
require_relative "contestant"
require_relative "jury"

#After your tests pass, uncomment this code below
#=========================================================
# Create an array of twenty hopefuls to compete on the island of Borneo
@contestants = %w(carlos walter aparna trinh diego juliana poornima juha sofia julia fernando dena orit colt zhalisa farrin muhammed ari rasha gauri)
@contestants.map!{ |contestant| Contestant.new(contestant) }.shuffle!
#
# Create two new tribes with names
@coyopa = Tribe.new(name: "Pagong", members: @contestants.shift(10))
@hunapu = Tribe.new(name: "Tagi", members: @contestants.shift(10))
#
# Create a new game of Survivor
@borneo = Game.new(@coyopa, @hunapu)

#=========================================================

#This is where you will write your code for the three phases

def phase_one
	phase1announce = "Phase 1"
	phase1 = Artii::Base.new
	puts phase1.asciify(phase1announce)
	puts "THIS IS THE BEGINNING: PHASE 1 OF SURVIVR HAS COMMENCED!\n".green
	8.times do
		losers_tribe = @borneo.immunity_challenge
		puts "#Wake up #{losers_tribe}! You lost the challenge and now it's time to vote!".red
		loser = losers_tribe.tribal_council	
		losers_tribe.delete(loser)	
		puts "Poor #{loser.to_s.upcase}! You are OUT!".pink	
	end	
end

def phase_two
	phase2announce = "Phase 2"
	phase2 = Artii::Base.new
	puts phase2.asciify(phase2announce)
	puts "WE ARE WELL ON OUR WAY: PHASE 2 OF SURVIVRS HAS COMMENCED".green 
	3.times do		
		immune = @borneo.individual_immunity_challenge
		puts "We have a glorious winner #{immune.to_s.capitalize}! You have WON!".blue
		loser = @merge_tribe.tribal_council(immune: immune)
		@merge_tribe.delete(loser)		
		puts "Poor #{loser.to_s.upcase}! YOU ARE OUT!".pink	 	
	end	
end

def phase_three
	phase3announce = "Phase 3"
	phase3 = Artii::Base.new
	puts phase3.asciify(phase3announce)
	puts "ROUND 3... FIGHT!!!\n".green
	7.times do
		immune = @borneo.individual_immunity_challenge
		puts "We have a glorious winner #{immune.to_s.capitalize}! You have WON!".blue
		loser = @merge_tribe.tribal_council(immune: immune)
		@merge_tribe.delete(loser)
		@jury.add_member loser 
		puts "Poor #{loser.to_s.upcase}! YOU ARE OUT!".pink	 	
	end
	phase4announce = "Phase 4 Final"
	phase4 = Artii::Base.new
	phase4.asciify(phase4announce)
	puts phase4.asciify(phase4announce)
	return 7
end


# If all the tests pass, the code below should run the entire simulation!!
#=========================================================
phase_one #8 eliminations
@merge_tribe = @borneo.merge("Cello") # After 8 eliminations, merge the two tribes together
phase_two #3 more eliminations
@jury = Jury.new
phase_three #7 elminiations become jury members
finalists = @merge_tribe.members #set finalists
vote_results = @jury.cast_votes(finalists) #Jury members report votes
@jury.report_votes(vote_results) #Jury announces their votes
@jury.announce_winner(vote_results) #Jury announces final winner
