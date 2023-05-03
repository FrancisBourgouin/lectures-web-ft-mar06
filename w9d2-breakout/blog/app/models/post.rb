class Post < ApplicationRecord
  belongs_to: :author
end


# author_with_id_one = Author.find(1)
# author_with_id_one.posts

