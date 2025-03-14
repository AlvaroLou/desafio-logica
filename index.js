/*  
    1️⃣ Desafio Classificador de nível de Herói
    ## Objetivo
    Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
*/
const name = "Jogador 1"
const xp = 1
let rank = ""
// Se XP for menor do que 1.000 = Ferro
if (xp <= 1000) {
    rank = "Ferro";
} 
// Se XP for entre 1.001 e 2.000 = Bronze"
else if (xp > 1000 && xp <= 2000) {
    rank = "Bronze";
}
// Se XP for entre 2.001 e 5.000 = Prata
else if (xp > 2000 && xp <= 5000) {
    rank = "Prata";
}
// Se XP for entre 5.001 e 7.000 = Ouro
else if (xp > 5000 && xp <= 7000) {
    rank = "Ouro";
}
// Se XP for entre 7.001 e 8.000 = Platina
else if (xp > 7000 && xp <= 8000) {
    rank = "Platina";
} 
// Se XP for entre 8.001 e 9.000 = Ascendente
else if (xp > 8000 && xp <= 9000) {
    rank = "Ascendente";
} 
// Se XP for entre 9.001 e 10.000= Imortal
else if (xp > 9000 && xp <= 10000) {
    rank = "Imortal";
} 
// Se XP for maior ou igual a 10.001 = Radiante
else {
    rank = "Radiante";
}
// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"
console.log("O Herói de nome: " + name + " está no nível: " + xp + " e no rank: " + rank)