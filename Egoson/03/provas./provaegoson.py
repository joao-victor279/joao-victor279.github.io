class Carro:
    rodas = 4
    def __init__(self, modelo):
     self.modelo = modelo
    def __str__(self):
       return f"Seu modelo de carro é um {self.modelo} e tem {self.rodas}"

carro1 = Carro("Aura")
carro2 = Carro("Ego")
carro3 = Carro("Egoson")
carro3.rodas = 3

print(carro1)
print(carro2)
print(carro3)