from atividade import Carrinho

modelo = input("Digite o modelo do seu carro: ")
consumo = int(input("Digite o consumo do seu veículo: "))
carro = Carrinho(modelo, consumo)

opcao = 0

while opcao != 4:
    print("1- Abastecer")
    print("2- Viajar")
    print("3- Status")
    print("4- Sair")

    opcao = int(input("Digite uma opção: "))

    if opcao == 1:
        litros = int(input("Digite quantos livros vão ser adicionados: "))
        carro.abastecer_carrinho(litros)

    elif opcao == 2:
        distancia = int(input("Qual a distancia da viagem: "))
        carro.viajar(distancia)

    elif opcao == 3:
        carro.status()

    elif opcao == 4:
        print(f"Saindo...")