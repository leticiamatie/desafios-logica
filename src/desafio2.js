/* # Desafio 2️ - Calculadora de partidas Rankeadas
## Objetivo:
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através 
do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/

let saldo = calculaRanking(130,10)
let nivel = ' '

if(saldo < 10){
	nivel = "Ferro"
}else if (saldo >=  11 && saldo <= 20){
	nivel = "Bronze"
}else if (saldo >= 21 && saldo <= 50){
	nivel = "Prata"
}else if (saldo >= 51 && saldo <= 80){
	nivel = "Ouro"
}else if (saldo >= 81 && saldo <= 90){
	nivel = "Diamante"
}else if (saldo >= 91 && saldo <= 100){
	nivel = "Lendário"
}else{
	nivel = "Imortal"
}

function calculaRanking(vitoria, derrota){
    let saldo = vitoria - derrota
    return saldo
}

console.log("O Herói tem de saldo de " + saldo + " e está no nível de " + nivel)

