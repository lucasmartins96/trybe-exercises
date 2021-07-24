# 1. Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. 
#	  Finalize ordenando os resultados de forma decrescente.
SELECT 
    rating, AVG(length) AS media_duracao
FROM
    sakila.film
GROUP BY rating
HAVING media_duracao BETWEEN 115 AND 121.5
ORDER BY media_duracao DESC;

# 2. Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. 
# 	  Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível.
#	  Finalize ordenando os resultados de forma crescente.
SELECT 
    rating, SUM(replacement_cost) AS replacement_cost_summation
FROM
    sakila.film
GROUP BY rating
HAVING replacement_cost_summation > 3950.5
ORDER BY replacement_cost_summation;

