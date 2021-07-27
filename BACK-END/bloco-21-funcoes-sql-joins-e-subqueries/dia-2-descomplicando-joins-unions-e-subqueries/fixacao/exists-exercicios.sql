# 1. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados.
SELECT 
    Id, Title
FROM
    hotel.Books b
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent b_l
        WHERE
            b_l.book_id = b.Id);

# 2. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT 
    Id, Title
FROM
    hotel.Books b
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.Books_Lent b_l
        WHERE
            b_l.book_id = b.Id
                AND b.Title LIKE '%lost%');

# 3. Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT 
    c.`Name`
FROM
    hotel.Customers c
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            hotel.CarSales cs
        WHERE
            cs.CustomerID = c.CustomerId);

# 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID);
