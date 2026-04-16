class Carrinho:
    def __init__(self, modelo, consumo):
        self.modelo = modelo
        self.tanque = 0
        self.consumo = consumo

    def abastecer_carrinho(self, litros):
        self.tanque += litros
        print(f"Seu carro foi abastecido {litros}L.")

    def viajar(self, distancia):
        autonomia = distancia / self.consumo
        if self.tanque < autonomia:
            print("Não é possível realizar a viagem.")
        elif self.tanque > autonomia:
            print("Viagem conclúida.")

    def status(self):
        print(f"O {self.modelo} tem {self.tanque} L no tanque.)")