# Função para calcular o fatorial de um número
def fatorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * fatorial(n - 1)

# Solicitar um número ao usuário
numero = int(input("Digite um número para calcular o fatorial: "))

# Verificar se o número é positivo
if numero < 0:
    print("Fatorial não é definido para números negativos.")
else:
    print(f"O fatorial de {numero} é {fatorial(numero)}")
