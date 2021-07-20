# 01. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT 'This is SQL Exercise, Practice and Solution';

# 02. Escreva uma query para exibir três números em três colunas.
SELECT 2 AS n1, 4 AS n2, 6 AS n3;

# 03. Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15 AS soma;

# 04. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT ((5 + 5) / 2) AS 'expressão aritmética';

# 05. Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists.Scientists;

# 06. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

# 07. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT Name FROM Scientists.Scientists ORDER BY Name;

# 08. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;

# 09. Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT concat('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') FROM Scientists.Projects;

# 10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;

# 11. Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT Project FROM Scientists.AssignedTo;

# 12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;

# 13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT Name FROM Scientists.Projects ORDER BY Hours LIMIT 1 OFFSET 1;

# 14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;

# 15. Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", 
# em que Number se refira a quantidade de cientistas.
SELECT concat('Existem ', count(Name), ' cientistas na tabela Scientists') FROM Scientists.Scientists;
