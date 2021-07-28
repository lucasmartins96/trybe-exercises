-- 1. Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id.
USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalPayments(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total_payments INT;
    SELECT COUNT(*)
    FROM sakila.payment
    WHERE customer_id = id INTO total_payments;
    RETURN total_payments;
END $$

DELIMITER ;

SELECT GetTotalPayments(2);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id, retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$
CREATE FUNCTION GetFilmByInventoryId(id INT)
RETURNS VARCHAR(128) READS SQL DATA
BEGIN
	DECLARE title_film VARCHAR(128);
	SELECT f.title
	FROM sakila.inventory i
	INNER JOIN sakila.film f ON f.film_id = i.film_id
	WHERE i.inventory_id = id INTO title_film;
    RETURN title_film;
END $$
DELIMITER ;

SELECT GetFilmByInventoryId(200);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 'Horror') e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$
CREATE FUNCTION GetAmountFilmsByCategory(category VARCHAR(15))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE amount_films INT;
	SELECT COUNT(*)
    FROM sakila.film_category fcat
	INNER JOIN sakila.category cat ON cat.category_id = fcat.category_id
	WHERE cat.`name` = category INTO amount_films;
    RETURN amount_films;
END $$
DELIMITER ;

SELECT GetAmountFilmsByCategory('documentary');
