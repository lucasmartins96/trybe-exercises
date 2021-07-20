-- 1. Monte uma query que exiba seu nome na tela;
SELECT 'Lucas Martins da Silva';
SELECT 'Oi';
-- 2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Lucas Martins da Silva', 'São Paulo', 24;

-- 3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
SELECT 'Lucas Martins da Silva' as nome, 'São Paulo' as cidade_natal, 24 as idade;

-- 4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
SELECT 13 * 8;

-- 5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() AS data_atual;

-- 1. Escreva uma query que selecione todas as colunas da tabela city
USE sakila;
SELECT city FROM city;

-- 2. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer
SELECT first_name, last_name FROM customer;

-- 3. Escreva uma query que exiba todas as colunas da tabela rental
SELECT * FROM rental;

-- 4. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film
SELECT title, description, release_year FROM film

-- 5. Utilize o SELECT para explorar todas as tabelas do banco de dados.
