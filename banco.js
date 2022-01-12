export class banco {
    agencia;
    cliente;
    saldo = 0

    constructor(agencia, cliente) {
        this.agencia = agencia
        this.cliente = cliente
    }


    depositar(valor) {
        if (valor <= 0) return
        this.saldo += valor
    }

    sacar(valor) {
        if (this.saldo >= valor)
            this.saldo -= valor
        return valor
    }

    transferencia(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}