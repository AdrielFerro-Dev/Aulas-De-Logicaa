let nomeheroi = "Malone"
let resultado = soma(20, 30)
let rank = ""

function soma(vitoria, derrota) {
    let somatorio = vitoria - derrota
    return somatorio
}

do {
    if (resultado <= 0) {
        console.log("O herói não possui vitórtias suficiente para ser classificado.")
        console.log("Volte quando obtiver saldo de vitórias positivas.")
        break;

    } else if (resultado < 10) {
        rank = "Ferro"

    } else if (resultado < 20) {
        rank = "Bronze"

    } else if (resultado < 50) {
        rank = "Ouro"

    } else if (resultado < 80) {
        rank = "Platina"

    } else if (resultado < 100) {
        rank = "Diamante"

    } else {
        rank = "Mestre"
    }

    console.log("O herói " + nomeheroi + " tem saldo de " + resultado + " vitórias e está no rank " + rank)
} while (resultado <= 0)