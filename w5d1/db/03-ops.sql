-- Basic SELECT

SELECT * FROM authors;

-- Single WHERE clause

-- SELECT * FROM authors WHERE description LIKE '%nov%'; 
-- SELECT * FROM authors WHERE description LIKE '%9';

SELECT * FROM authors WHERE name LIKE '%a%';
SELECT * FROM authors WHERE name ILIKE '%a%';
SELECT * FROM authors WHERE LOWER(name) LIKE '%a%';

-- Multiple WHERE clauses

SELECT * FROM authors WHERE name ILIKE '%a%' AND description LIKE '%19';


SELECT *
FROM authors
  WHERE name ILIKE '%a%'
  AND description LIKE '%19'
  AND funny = true
;

-- Ordering results

SELECT * FROM authors ORDER BY name ASC; -- ASC is default, no need to write it
SELECT * FROM authors ORDER BY name DESC;


SELECT *
FROM authors
  WHERE name ILIKE '%a%'
  AND description LIKE '%19'
  AND funny = true
ORDER BY name
;

-- Joining tables

-- SELECT *, jokes.id AS joke_id
--   FROM jokes
--   JOIN authors ON jokes.author_id = authors.id;


-- SELECT jokes.*, authors.name, authors.description, authors.funny AS joke_id
--   FROM jokes
--   JOIN authors ON jokes.author_id = authors.id;


SELECT COUNT(authors.name) AS jokes_with_authors, COUNT(*) AS total_jokes
  FROM jokes
  LEFT JOIN authors ON authors.id = jokes.author_id;


SELECT AVG(rating), jokes.author_id FROM jokes GROUP BY jokes.author_id;

SELECT jokes.author_id FROM jokes GROUP BY jokes.author_id HAVING AVG(rating) > 4;

-- SELECT jokes.*, authors.name FROM jokes JOIN authors ON jokes.author_id = authors.id;

-- SELECT jokes.id, jokes.question, jokes.answer, jokes.author_id, jokes.rating

-- Aggregate functions (AVG, MIN, MAX, SUM, COUNT) (HAVING GROUPBY)

-- SELECT MIN(rating), id FROM jokes GROUP BY id;

SELECT MIN(rating) FROM jokes;

-- Nested selects

SELECT * FROM jokes WHERE rating = (SELECT MIN(rating) FROM jokes);

-- Show the jokes from the authors that have an average rating that is better than 4

SELECT *
  FROM jokes
  WHERE author_id IN (1,2,3)
  ;

SELECT *
  FROM jokes
  WHERE author_id IN (
    SELECT jokes.author_id
    FROM jokes
    GROUP BY jokes.author_id
    HAVING AVG(rating) > 4
  )
;

SELECT * FROM jokes LIMIT 2;
SELECT * FROM jokes LIMIT 2 OFFSET 2;
SELECT * FROM jokes LIMIT 2 OFFSET 4;


-- VIEWS ! Read only table

CREATE VIEW cool_authors_ids AS (
  SELECT jokes.author_id
    FROM jokes
    GROUP BY jokes.author_id
    HAVING AVG(rating) > 4
);

SELECT *
  FROM jokes
  WHERE author_id IN (
    SELECT * FROM cool_authors_ids
  )
;

-- Views (stretch)

-- VIEW => helper functionish -- urlDatabase => getUrlsForUser'
