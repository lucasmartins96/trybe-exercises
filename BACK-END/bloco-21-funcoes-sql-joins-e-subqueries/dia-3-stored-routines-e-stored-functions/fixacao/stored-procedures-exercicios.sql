-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$
CREATE PROCEDURE ShowTenMostPopularActors()
BEGIN
	SELECT 
    a.first_name, COUNT(fa.film_id) performances
FROM
    sakila.film_actor fa
        INNER JOIN
    sakila.actor a ON a.actor_id = fa.actor_id
GROUP BY fa.actor_id
ORDER BY performances DESC
LIMIT 10;
END $$
DELIMITER ;

CALL ShowTenMostPopularActors();

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, seu titulo, o id de sua categoria e o nome da categoria selecionada. Use as tabelas film, film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$
CREATE PROCEDURE ListFilmsByCategory(IN category VARCHAR(15))
BEGIN
	SELECT 
    fcat.film_id, f.title, fcat.category_id, cat.`name`
FROM
    sakila.film_category fcat
        INNER JOIN
    sakila.category cat ON cat.category_id = fcat.category_id
        INNER JOIN
    sakila.film f ON f.film_id = fcat.film_id
WHERE
	cat.`name` = category;
END $$
DELIMITER ;

CALL ListFilmsByCategory('drama');

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$
CREATE PROCEDURE IsCustomerActive(
	IN email VARCHAR(50),
    OUT is_active VARCHAR(5)
)
BEGIN
	SELECT IF(c.`active` = 1, 'TRUE', 'FALSE') INTO is_active
    FROM sakila.customer c
    WHERE c.email = email;
END $$
DELIMITER ;

CALL IsCustomerActive('SANDRA.MARTIN@sakilacustomer.org', @customer_active);
SELECT @customer_active;
CALL IsCustomerActive('MARY.SMITH@sakilacustomer.org', @customer_active);
SELECT @customer_active;

