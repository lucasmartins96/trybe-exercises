# Exercício 3: Faça um programa que, dado um valor n qualquer,
# tal que n > 1 ,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n


def make_square_stars(num):
    counter = num
    while counter > 0:
        print(num * "*")
        counter -= 1


make_square_stars(5)
