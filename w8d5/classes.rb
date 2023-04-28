# What's a class ?

# Blueprint (constructor / methods / properties)


class Potato 
  def initialize name, type
    @name = name
    @type = type
  end

  # attr_reader :name
  # attr_writer :name
  attr_accessor :name

  def greet
    puts "Hi, my name #{@name} and I'm a #{@type} potato"
  end

end

class SuperPotato < Potato
  def initialize name
  
  end

end


bob = Potato.new("Dr. Papa", "Russett")
robert = Potato.new("Potatinator", "Yukon gold")

p bob.name
bob.name = "Evil Dr. Papa"
p bob.name

bob.greet
robert.greet