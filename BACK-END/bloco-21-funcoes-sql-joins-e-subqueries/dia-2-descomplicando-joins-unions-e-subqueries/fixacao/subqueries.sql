# Diferentes maneiras de utilizar uma SUBQUERY
# 1. Usando uma SUBQUERY como fonte de dados para o FROM.
SELECT 
    f.title, f.rating
FROM
    (SELECT 
        *
    FROM
        sakila.film
    WHERE
        rating = 'R') AS f;

# 2. Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY.
SELECT 
    address,
    district,
    (SELECT 
            city
        FROM
            sakila.city
        WHERE
            city.city_id = sakila.address.city_id) AS city
FROM
    sakila.address;

# 3. Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY.
SELECT 
    address, district
FROM
    sakila.address
WHERE
    city_id IN (SELECT 
            city_id
        FROM
            sakila.city
        WHERE
            city IN ('Sasebo' , 'San Bernardino', 'Athenai', 'Myingyan'));

# 4. Usando uma tabela externa, de fora da SUBQUERY , dentro dela.
SELECT 
    first_name,
    (SELECT 
            address
        FROM
            sakila.address
        WHERE
            address.address_id = tabela_externa.address_id) AS address
FROM
    sakila.customer AS tabela_externa;
