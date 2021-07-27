-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (internationa_sales) de cada filme.
SELECT 
    mov.title 'Nome do filme',
    box.domestic_sales 'Vendas nacionais',
    box.international_sales 'Vendas internacionais'
FROM
    Pixar.BoxOffice box
        INNER JOIN
    Pixar.Movies mov ON box.movie_id = mov.id;

-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (internationa_sales) do que vendas nacionais (domestic_sales).


-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT 
    mov.title 'Nome do filme',
    box.rating
FROM
    Pixar.BoxOffice box
        INNER JOIN
    Pixar.Movies mov ON box.movie_id = mov.id
    ORDER BY mov.title DESC, box.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
-- SELECT * FROM Pixar.Theater t LEFT JOIN Pixar.Movies m ON t.id = m.theater_id;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
-- SELECT mov.id, mov.title, mov.director, mov.`year`, mov.length_minutes, mov.theater_id FROM Pixar.Movies mov RIGHT JOIN Pixar.Theater the ON the.id = mov.theater_id;


-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
-- INNER JOIN
SELECT 
    mov.title
FROM
    Pixar.Movies mov
        INNER JOIN
    Pixar.BoxOffice box ON mov.id = box.movie_id
WHERE
    box.rating > 7.5;

-- SUBQUERY
SELECT 
    mov.title
FROM
    Pixar.Movies mov
WHERE
    mov.id IN (SELECT 
            box.movie_id
        FROM
            Pixar.BoxOffice box
        WHERE
            box.rating > 7.5);

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem as avaliações dos filmes lançados depois de 2009.


-- Exercício 8: Utilizando o EXISTS, selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT 
    t.`name`, t.location
FROM
    Pixar.Theater t
WHERE
    EXISTS( SELECT 
            *
        FROM
            Pixar.Movies m
        WHERE
            t.id = m.theater_id);

-- Exercício 9: Utilizando o EXISTS, selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT 
    t.`name`, t.location
FROM
    Pixar.Theater t
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Pixar.Movies m
        WHERE
            t.id = m.theater_id);
