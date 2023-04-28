# Blocks!


def say_hi_to_someone name
  puts "Hi #{name}"
end

def fancy_wrapper
  puts "|-| - - - - - - - *** - - - - - - - |-|"
  puts yield
  puts "|-| - - - - - - - *** - - - - - - - |-|"
end


fancy_wrapper { 42 + 42 }