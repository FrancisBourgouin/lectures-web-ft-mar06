# Motherboard => Logic Boards

def say_hi
  puts "Hi!"
end

def say_hi_to_someone name
  puts "Hi #{name}"
end

def say_hi_to_two_persons name1, name2
  puts "Hi #{name1}"
  sleep(1)
  puts "Hi #{name2}"
end

def add_two_numbers num1, num2
  return num1 + num2
end

result = add_two_numbers 5,6
puts result

# say_hi
# say_hi_to_two_persons "Josh", "Ashwini"
# say_hi_to_someone "bob"


list = ["Montréal","Toronto","Ottawa","Saskatoon","Sarnia","Mississauga"]
visited = ["Montréal","Toronto","Ottawa"]

p list.shuffle
p list
p list.shuffle!
p list
puts list.empty?
puts list.include?("Montréal")
p list - visited