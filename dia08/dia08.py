

# TABUADA DE UM NUMERO FORNECIDO PELO USUARIO


def gerar_tabuada(numero):
    print (f"Tabuada do {numero} ")

    for  i in range (1,11):
        resultado = numero * i  # i = intereção
        print(f"{numero} x {i} = {resultado}")

# solicitar ao usuario que insira uma numero

numero = (int (input("Digite um número para gerar a tabuada :")))

# chama a função para gerar a tabuada

gerar_tabuada(numero)


print("Tabuada gerada com sucesso")














