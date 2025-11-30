class CuentaBancaria {
    #saldo = 0

    depositar(cantidad) {
        this.#saldo += cantidad
    }

    mostrarSaldo() {
        return this.#saldo
    }
}

const cuenta = new CuentaBancaria()
cuenta.depositar(100)
console.log(cuenta.mostrarSaldo())