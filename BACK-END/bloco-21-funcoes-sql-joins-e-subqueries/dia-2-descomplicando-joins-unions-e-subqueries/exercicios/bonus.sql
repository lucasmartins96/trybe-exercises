-- Exercício 10: Utilizando o INNER JOIN, selecione todas as informações dos filmes com avaliação maior que 8.
SELECT 
    mov.title,
    mov.director,
    mov.`year`,
    mov.length_minutes,
    box.rating,
    box.domestic_sales,
    box.international_sales
FROM
    Pixar.Movies mov
        INNER JOIN
    Pixar.BoxOffice box ON mov.id = box.movie_id
WHERE
    box.rating > 8;

-- Exercício 11: Utilizando o SELF JOIN, selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT 
    mov1.title,
    mov1.length_minutes,
    mov2.title,
    mov2.length_minutes
FROM
    Pixar.Movies mov1,
    Pixar.Movies mov2
WHERE
    mov1.director = mov2.director;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

