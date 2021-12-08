"""
Exercício 4 Baseado no exercício 3, escreva uma função que,
dado uma lista de emails, deve retornar somente os emails válidos.

Caso uma exceção ocorra, apenas a escreva na tela.
Exemplo:
  [
    "nome@dominio.com",
    "errad#@dominio.com",
    "outro@dominio.com"
  ] -> ["nome@dominio.com", "outro@dominio.com"]
"""
from ex_03 import validate_email


def filter_valid_emails(emails):
    valid_emails = []
    for email in emails:
        try:
            validate_email(email)
        except ValueError as exc:
            print(exc)
        else:
            valid_emails.append(email)
    return valid_emails
