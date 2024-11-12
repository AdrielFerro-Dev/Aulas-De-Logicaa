let nomeheroi = "Malone"
let xp = 10
let rank = ""




do{
    if(xp <= 0) {
        console.log("Você não tem XP suficiente para ser rankeado.")
        console.log("Volte quando conseguir mais XP.")
        break;


    } else if (xp < 1000){
      rank = "Ferro"

    } else if (xp < 2000){
        console.log (rank = "Bronze")

    } else if (xp < 5000){
        console.log (rank = "Prata")

    } else if (xp < 7000){
        console.log (rank = "Ouro")

    } else if (xp < 10000){
        console.log (rank = "Platina")

    } else if (xp < 15000){
        console.log (rank = "Diamante")

    }else{
        console.log (rank = "Mestre")
    };

    console.log ("Heroi "+ nomeheroi + " está no rank " + rank)
} while (xp < 0)

