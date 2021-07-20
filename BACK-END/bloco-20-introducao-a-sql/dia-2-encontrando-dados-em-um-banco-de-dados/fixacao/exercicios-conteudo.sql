# Para os exercícios a seguir, vamos usar a tabela sakila.film
# 1. Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT title FROM sakila.film;

# 2. Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
SELECT title, release_year, rating FROM sakila.film;

# 3. Quantos filmes temos cadastrados?
SELECT COUNT(film_id) FROM sakila.film;

# Para os exercícios a seguir, vamos usar a tabela sakila.actor
# 1. Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
SELECT DISTINCT last_name FROM sakila.actor;

# 2. Quantos sobrenomes únicos temos na tabela? 121

# 3. Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT * FROM sakila.actor ORDER BY first_name, last_name DESC;

# 4. Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados,
# 	 mas não mostre o idioma english .
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

# 5. Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
SELECT * FROM sakila.film;

# 6. Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes, 
# 	 incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição.
# 	 Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT 
    title,
    release_year,
    rental_duration,
    rating,
    replacement_cost
FROM
    sakila.film
ORDER BY
	rental_duration DESC,
	replacement_cost
LIMIT 20;
