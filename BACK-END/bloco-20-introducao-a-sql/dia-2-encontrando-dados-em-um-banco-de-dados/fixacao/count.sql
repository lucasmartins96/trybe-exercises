SELECT * FROM sakila.staff;
-- 1. Quantas senhas temos cadastradas nessa tabela? 1
SELECT count(password) FROM staff;

-- 2. Quantas pessoas temos no total trabalhando para nossa empresa? 2
SELECT count(first_name) FROM staff;

-- 3. Quantos emails temos cadastrados nessa tabela? 2
SELECT count(email) FROM sakila.staff;