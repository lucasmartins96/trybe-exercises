# 1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor, exibindo apenas o nome e o sobrenome. Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT 
    s.first_name, s.last_name
FROM
    sakila.staff s 
UNION ALL SELECT 
    a.first_name, a.last_name
FROM
    sakila.actor a;

# 2. Monte uma query que una os resultados das tabelas customer e actor, exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor. Exiba apenas os resultados únicos.
SELECT 
    c.first_name
FROM
    sakila.customer c
WHERE
    c.first_name LIKE ('%tracy%') 
UNION SELECT 
    a.first_name
FROM
    sakila.actor a
WHERE
    a.first_name LIKE ('%je%');

# 3. Monte uma query que exiba a união dos cinco últimos nomes da tabela actor, o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer. Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
(SELECT 
    a.first_name, 'actor' AS 'table'
FROM
    sakila.actor a
ORDER BY a.first_name DESC
LIMIT 5) UNION (SELECT 
    s.first_name, 'staff' AS 'table'
FROM
    sakila.staff s
ORDER BY s.first_name
LIMIT 1) UNION (SELECT 
    c.first_name, 'customer' AS 'table'
FROM
    sakila.customer c
LIMIT 5 OFFSET 15) ORDER BY first_name;

# 4. Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
(SELECT 
    first_name
FROM
    sakila.customer) UNION ALL (SELECT 
    first_name
FROM
    sakila.actor) ORDER BY first_name
    LIMIT 15 OFFSET 45;
