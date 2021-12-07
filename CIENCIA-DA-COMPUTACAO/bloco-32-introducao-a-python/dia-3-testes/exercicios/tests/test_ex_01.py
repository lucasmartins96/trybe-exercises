"""
Exercício 1: Escreva um programa que retorne uma lista com os
valores numéricos de 1 a N, mas com as seguintes exceções:

  - Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
  - Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
  - Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz'
    ao invés do número';
  - Ex: 3 -> [1, 2, "Fizz"].
"""

from ex_01 import fizz_buzz


def test_contain_word_fizz_instead_multiples_three():
    assert fizz_buzz(4) == [1, 2, "Fizz", 4]


def test_contain_word_buzz_instead_multiples_five():
    assert fizz_buzz(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_contain_word_FizzBuzz_instead_multiples_three_and_five():
    assert fizz_buzz(15) == [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]
