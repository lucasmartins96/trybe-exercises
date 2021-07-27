SET SQL_SAFE_UPDATES = 0;
# 1. Exclua do banco de dados o ator com o nome de "KARL".
SELECT * FROM sakila.actor WHERE first_name = 'KARL';

-- deletando referências
DELETE FROM sakila.film_actor 
WHERE
    actor_id = 12;
    
-- deletando de fato
DELETE FROM sakila.actor 
WHERE
    first_name = 'KARL';

# 2. Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT * FROM sakila.actor WHERE first_name = 'MATTHEW';
SELECT * FROM sakila.film_actor WHERE actor_id IN (8, 103, 181);

-- deletando referências
DELETE FROM sakila.film_actor 
WHERE
    actor_id IN (8 , 103, 181);

-- deletando de fato
DELETE FROM sakila.actor 
WHERE
    first_name = 'MATTHEW';

# 3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
SELECT * FROM sakila.film_text WHERE description LIKE '%saga%';
DELETE FROM sakila.film_text WHERE description LIKE '%saga%';

# 4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
SELECT * FROM sakila.film_actor;
TRUNCATE sakila.film_actor;

SELECT * FROM sakila.film_category;
TRUNCATE sakila.film_category;