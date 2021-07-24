# 1. Monte um query que exiba:
# 		A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT avg(`length`) AS 'Média de Duração' FROM sakila.film;

# 		A duração mínima dos filmes como 'Duração Mínima';
SELECT min(`length`) AS 'Duração Mínima' FROM sakila.film;

# 		A duração máxima dos filmes como 'Duração Máxima';
SELECT max(`length`) AS 'Duração Máxima' FROM sakila.film;

# 		A soma de todas as durações como 'Tempo de Exibição Total';
SELECT sum(`length`) AS 'Tempo de Exibição Total' FROM sakila.film;

# 		E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT count(*) AS 'Filmes Registrados' FROM sakila.film;
