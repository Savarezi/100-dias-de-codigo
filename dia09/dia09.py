
# Função para converter Celsius para Fahrenheit
def celsius_para_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

# Solicita ao usuário para inserir a temperatura em Celsius
celsius = float(input("Digite a temperatura em Celsius: "))

# Chama a função e exibe o resultado
fahrenheit = celsius_para_fahrenheit(celsius)
print(f"A temperatura em Fahrenheit é: {fahrenheit}°F")
