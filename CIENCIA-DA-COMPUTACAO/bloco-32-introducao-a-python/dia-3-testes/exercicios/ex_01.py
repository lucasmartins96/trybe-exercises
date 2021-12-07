"""
Exercício 1: Escreva um programa que retorne uma lista com os
valores numéricos de 1 a N, mas com as seguintes exceções:

  - Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
  - Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
  - Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz'
    ao invés do número';
  - Ex: 3 -> [1, 2, "Fizz"].
"""


def fizz_buzz(number):
    fizz_buzz_list = [
        "FizzBuzz"
        if i % 3 == 0 and i % 5 == 0
        else "Fizz"
        if i % 3 == 0
        else "Buzz"
        if i % 5 == 0
        else i
        for i in range(1, number + 1)
    ]
    return fizz_buzz_list
