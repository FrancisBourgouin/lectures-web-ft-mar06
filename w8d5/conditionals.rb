# == != && ||

value1 = 0
value2 = "0"
bob = "YEAH"

p value1 == value2

if value1 == value2
  p "AHHH YEAH"
end


if (value1 == value2)
#{
  p "AHHH YEAH"
end
#}

user = {
  :name => "Potator 2000",
  :is_admin => false
}

if !user[:is_admin]
  puts "Please login as an admin to complete this task"
end

unless user[:is_admin]
  puts "Please login as an admin to complete this task"
end


puts "Please login as an admin to complete this task" unless user[:is_admin]
puts "Please login as an admin to complete this task" if !user[:is_admin]


if bob == true
  puts "What?"
elsif bob == "bob"
  puts "Who?"
else
  puts "WTH?"
end


p 1 <=> 5
p 1 <=> 1
p 1 <=> -6