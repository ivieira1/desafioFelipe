let NivelJogador = ""
let NomeJogador = "Estevão"
let PontosJogador = 5000

//Estruturas Condicionais//
if (PontosJogador < 1000)
{ NivelJogador = "Ferro"
}
else if (NivelJogador > 1001 && NivelJogador < 2000) {
    NivelJogador = "Bronze"}
else if (NivelJogador > 2001 && NivelJogador < 5000) {
    NivelJogador = "Prata"
}
else if (PontosJogador > 5001 && PontosJogador < 7000) {
    NivelJogador = "Ouro"
}
else if (PontosJogador > 7001 && PontosJogador < 8000) {
    NivelJogador = "Platina"
}
else if (PontosJogador > 8001 && PontosJogador < 9000){
    NivelJogador = "Ascendente"
}
else if (PontosJogador > 9001 && PontosJogador < 10000) {
    NivelJogador = "Imortal"
}
else if (PontosJogador === 10001 || PontosJogador > 10001) {
    NivelJogador = "Radiante"
}
// Mensagem de Saída//
console.log("O Herói de nome " + NomeJogador+ "está no nível de" + NivelJogador)
