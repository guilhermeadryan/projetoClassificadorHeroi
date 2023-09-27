let nomeHeroi = "Shaolink matador de porco"
let idadeHeroi = "24"
let estaVivo = true
let rankAtual = ""
let xpAtual = 0

while(xpAtual > 1001){
	rankAtual = "Bronze"
	xpAtual++
}

while(xpAtual > 2001){
	rankAtual = "Prata"
	xpAtual++
}

while(xpAtual > 6001){
	rankAtual = "Ouro"
	xpAtual++
}

while(xpAtual > 7001){
	rankAtual = "PLatina"
	xpAtual++
}

while(xpAtual > 8001){
	rankAtual = "Ascendente"
	xpAtual++
}

while(xpAtual > 9001){
	rankAtual = "Imortal"
	xpAtual++
}

while(xpAtual > 10001){
	rankAtual = "Radiante"
	xpAtual++
}

switch(rankAtual){
case "Prata":
	console.log("O Herói de nome " + nomeHeroi + "está no nível de " + rankAtual)
	break

case "Bronze":
	console.log("O Herói de nome " + nomeHeroi + "está no nível de " + rankAtual)
	break

case "Ouro":
	console.log("O Herói de nome " + nomeHeroi + "está no nível de " +rankAtual)
	break

case "Platina":
	console.log("O Herói de nome " + nomeHeroi + "está no nível de " +rankAtual)
	break

case "Ascendente":
	console.log("O Herói de nome " + nomeHeroi + "está no nível de "+rankAtual)
	break

case "Imortal":
	console.log("O Herói de nome " + nomeHeroi + "está no nível de " +rankAtual)
	break

case "Radiante":
	console.log("O Herói de nome " + nomeHeroi + "está no nível de " +rankAtual)
	break

default:
	console.log("O Herói de nome " + nomeHeroi + "está no nível de " +rankAtual)
}