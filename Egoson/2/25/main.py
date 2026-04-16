from balatro import Aluno
alunos = []
opcao = 0

while opcao !=5:
    print("1 - Cadastrar aluno")
    print("2 - Adicionar nota")
    print("3 - Exibir informações do aluno")
    print("4 - Listar alunos")
    print("5 - Sair")
    opcao = int(input("Escolha uma opção: "))
    
    if opcao == 1:
     nome = input("Digite o nome do aluno: ")
     idade = int(input("Digite a idade do aluno: "))
     curso = input("Digite o curso do aluno: ")
     alu = Aluno(nome, idade, curso)
     alunos.append(alu)

    elif opcao == 2:
       nome = input("Digite o nome do aluno: ")
       nota = input("Adicionar nota do aluno: ")

    elif opcao == 3:
       nome = input("Digite o nome do aluno: ")
       for alu in alunos:
          if alu.nome == nome:
             alu.exibir_informacoes()
             alu.calcular_media()
             break
          
    elif opcao == 4:
        for alu in alunos:
           print(f"Nome: {alu.nome} - Curso: {alu.curso}")

    elif opcao == 5:
       print("Saindo do programa...")
    else:
       print("Opção inválida. Tente novamente.")