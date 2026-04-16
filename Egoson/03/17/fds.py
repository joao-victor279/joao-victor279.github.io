class Carro:
 velocidade_maxima = 200
 def __init__(self, marca):
   self.marca = marca
 def __str__(self):
   return f"{self.marca} - {self.velocidade_maxima} km/h."
   
carro1 = Carro("Toyota")
carro2 = Carro("Ferrari")
print(carro1)
print(carro2)