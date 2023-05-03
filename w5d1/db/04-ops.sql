SELECT 
  authors.name, 
  (SELECT COUNT(*) FROM jokes WHERE authors.id = author_id) AS amount_of_jokes
FROM authors
;

SELECT
  question, answer
FROM
  (SELECT * FROM jokes WHERE rating > 4) AS good_jokes
WHERE
  author_id IN (1,2,3)
;

SELECT 
  *
FROM jokes
WHERE author_id IN (
    SELECT authors.id
    FROM authors
    WHERE authors.name ILIKE 'F%'
  )
;