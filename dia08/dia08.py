# Função para gerar e exibir a tabuada de um número fornecido
def gerar_tabuada(numero):
    print(f"\nTabuada do {numero}:")
    
    # Gerar a tabuada de 1 a 10
    for i in range(1, 11):
        resultado = numero * i
        print(f"{numero} x {i} = {resultado}")

# Solicitar ao usuário que insira um número válido
while True:
    try:
        numero = int(input("Digite um número para gerar a tabuada: "))
        break  # Se o número for válido, sair do loop
    except ValueError:
        print("Entrada inválida! Por favor, digite um número inteiro.")

# Chamar a função para gerar a tabuada
gerar_tabuada(numero)

print("\nTabuada gerada com sucesso")
