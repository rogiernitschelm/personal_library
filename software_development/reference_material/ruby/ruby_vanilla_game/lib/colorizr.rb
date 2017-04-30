class String
	@@colors = ["black", "white", "red", "pink", "light_blue", "blue", "green", "yellow", "light_grey"]

	def self.colors		
		puts "All colors available:"
		return @@colors
	end

	def self.sample_colors		
		puts "These are samples of the colors:"
		puts "\e[30mblack is a dark color\e[0m \n" +
		"\e[97mwhite is pretty light\e[0m \n" +
		"\e[31mred like a tomato\e[0m \n" +
		"\e[95mpink like a princess\e[0m \n" +
		"\e[94mlight blue like the ocean\e[0m \n" +
		"\e[34mblue like the sky\e[0m \n" +
		"\e[32mgreen like the leafs on a tree\e[0m \n" +
		"\e[33myellow like the sun\e[0m \n"	+
		"\e[37mlight grey like a... I have no idea.\e[0m"

	end	

	def self.create_colors
		@@colors.each do |color|		
			self.send(:define_method, color)do
				case color
					when "red" then return "\e[31m#{self}\e[0m "
					when "black" then return "\e[30m#{self}\e[0m " 
					when "white" then return "\e[97m#{self}\e[0m "
					when "pink" then return "\e[95m#{self}\e[0m "
					when "light_blue" then return "\e[94m#{self}\e[0m "
					when "blue" then return "\e[34m#{self}\e[0m "
					when "green" then return "\e[32m#{self}\e[0m "
					when "yellow" then return "\e[33m#{self}\e[0m "
					when "light_grey" then return "\e[37m#{self}\e[0m "
				end										
			end
		end			
	end
end

String.create_colors

# Test1 
puts
puts "TESTING ALL CREATED COLOR METHODS: "
print "red".red
print "black".black
print "white".white
print "blue".blue
print "light_blue".light_blue
print "green".green
print "yellow".yellow
print "pink".pink
print "light_grey".light_grey
puts

# Test2
puts
puts "TESTING String.colors: "
puts String.colors

# Test3
puts
puts "TESTING String.sample_colors: "
puts String.sample_colors
puts