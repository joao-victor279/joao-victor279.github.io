class MonitorServidor:
    def __init__(self, nome):
        self.__nome_servidor = nome
        self.__cpu_uso = 0.0
        self.__ram_uso = 0.0

@property
def nome(self):
    return self.__nome_servidor

@property
def cpu(self):
    return f"{self.__cpu_uso}%"

@property
def ram(self):
    return f"{self.__ram_uso}%"

def atualizar_carga(self,cpu,ram):
    if cpu < 0:
        self.__cpu_uso = 0.0
    elif cpu > 100:
        self.__cpu_uso = 100.0
    else:
        self.__cpu_uso = float(cpu)

    if ram < 0:
        self.__ram_uso = 0.0
    elif ram > 100:
        self.__ram_uso = 100
    else:
        self.__ram_uso = float(ram)

def verificar_alerta(self):
    if self.__cpu_uso > 90 or self.__ram_uso > 90:
        return "ALERTA: SOBRECARGA CRÍTICA!!!"
    elif self.__cpu_uso > 70 or self.__ram_uso > 70:
        return "ATENÇÃO: USO ELEVADO!"
    else:
        return "SISTEMA ESTÁVEL."
    
srv_web = MonitorServidor("Servidor-Web-01")

srv_web.atualizar_carga(45, 60)
print(f"Estado de {srv_web.nome}: {srv_web.verificar_alerta()}")

srv_web.atualizar_carga(120, -5)
print(f"Leitura Protegida -> CPU: {srv_web.cpu} | RAM: {srv_web.ram}")

srv_web.atualizar_carga(95, 80)
print(f"Estado Crítico: {srv_web.verificar_alerta()}")

srv_web.__cpu_uso = 10.0
print(f"CPU após tentativa de fraude: {srv_web.cpu}")