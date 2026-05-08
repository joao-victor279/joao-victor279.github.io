# cidadao = {
#     "nome": input("digite seu nome: "), 
#     "idade": int(input("Digite sua idade: ")), 
#     "altura": float(input("Digite sua altura: ")), 
#     "peso": float(input("Digite seu peso: ")), 
#     "estado_civil": bool(input("Digite seu estado civil (True para casado e False para solteiro): "))
# }
# print(cidadao)

# cidades = ["Fortaleza", "Horizonte", "Aquiraz", "Rio de Janeiro", "Cravinhos"]
# print(cidades)
# cidades.append("São Paulo")
# print(cidades)
# cidades[1] = "Curitiba"
# print(cidades)

coordenadas = (-16.6711057, -49.270251)

produto = {
    "nome": "Karlos Roberto",
    "preco": 3.50,
    "estoque": 1
}
print(produto)

produto["preco"] = 3.0

print(f"Produto {produto['nome']}")
print(f"Preço: {produto['preco']}")
print(f"Quantidade em estoque: {produto['estoque']}")
print(f"Localização: {coordenadas}")
