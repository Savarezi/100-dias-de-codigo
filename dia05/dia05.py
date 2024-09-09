## CALCULADORA

def adicao(x, y):
    return x + y

def subtracao(x, y):
    return x - y

def multiplicacao(x, y):
    return x * y

def divisao(x, y):
    if y != 0:
        return x / y
    else:
        return "Divisão por zero não é permitida!"

def calculadora():
    print("Selecione a operação:")
    print("1 - Adição")
    print("2 - Subtração")
    print("3 - Multiplicação")
    print("4 - Divisão")
    
    operacao = input("Digite o número da operação desejada (1/2/3/4): ")

    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))

    if operacao == '1':
        print(f"{num1} + {num2} = {adicao(num1, num2)}")
    elif operacao == '2':
        print(f"{num1} - {num2} = {subtracao(num1, num2)}")
    elif operacao == '3':
        print(f"{num1} * {num2} = {multiplicacao(num1, num2)}")
    elif operacao == '4':
        print(f"{num1} / {num2} = {divisao(num1, num2)}")
    else:
        print("Operação inválida!")

calculadora()
