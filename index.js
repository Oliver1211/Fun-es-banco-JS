import { cliente } from "./cliente.js"
import { banco } from "./banco.js"


const cliente1 = new cliente('Andrey', 23, 123456789)
const conta1 = new banco(cliente1, 3434)
conta1.depositar(500)
conta1.sacar(600)


const cliente2 = new cliente('Felipe', 25, 987654321)
const conta2 = new banco(cliente2, 2525)
conta2.depositar(800)
conta2.transferencia(500, conta1)



const cliente3 = new cliente('Matheus', 30, 741852963)
const conta3 = new banco(cliente3, 1414)
conta3.depositar(500)
conta3.transferencia(250, conta1)


console.log(conta1)