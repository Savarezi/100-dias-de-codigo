def escolha_opcao():
    print("Escolha uma das opções abaixo:")
    print("1 - Verificar se um número é par ou ímpar")
    print("2 - Calcular o fatorial de um número")
    
    opcao = input("Digite o número da sua escolha (1 ou 2): ")

    if opcao == "1":
        numero = int(input("Digite um número: "))
        if numero % 2 == 0:
            print(f"O número {numero} é par.")
        else:
            print(f"O número {numero} é ímpar.")
    
    elif opcao == "2":
        numero = int(input("Digite um número para calcular o fatorial: "))
        fatorial = 1
        for i in range(1, numero + 1):
            fatorial *= i
        print(f"O fatorial de {numero} é {fatorial}.")
    
    else:
        print("Opção inválida! Por favor, escolha 1 ou 2.")

# Chama a função para iniciar o programa
escolha_opcao()
