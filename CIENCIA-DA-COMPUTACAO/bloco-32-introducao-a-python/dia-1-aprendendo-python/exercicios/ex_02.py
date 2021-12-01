# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista


def list_avg(nums_list):
    nums_list_length = len(nums_list)
    acc = 0
    for num in nums_list:
        acc += num / nums_list_length
    return acc


print(list_avg([3, 4, 1, 2, 4, 7, 10]))
