# 1. Insira um novo funcionário na tabela sakila.staff.
# 	 Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector".
#	 Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar.
#	 Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!

SELECT * FROM sakila.staff;
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Luke', 'Skywalker', 2, 'luke_skywalker@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');

# 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Hannah', 'Dyna', 32, 'Hanna.Dyna@sakilastaff.com', 2, 1, 'Hannah', md5('HannaDyna')),
    ('Micah', 'Elliot', 10, 'Micah.Elliot@sakilastaff.com', 1, 1, 'Micah', md5('MicahElliot'));

# 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO 
	sakila.actor (first_name, last_name)
SELECT 
    first_name, last_name
FROM
    sakila.customer
LIMIT 5;

SELECT * FROM sakila.actor ORDER BY actor_id DESC;

# 4. Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (name) VALUES ('Thriller'), ('Romance'), ('Fantasy');

# 5. Cadastre uma nova loja na tabela sakila.store.
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`sakila`.`store`, CONSTRAINT `fk_store_staff` FOREIGN KEY (`manager_staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE)

