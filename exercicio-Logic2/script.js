// Escreva uma função chamada ePaisagem que
// recebe dois argumentos, Largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo
// paisagem.

// function ePaisagem(largura, altura) {
//     return largura > altura
// }

const ePaisagem = (largura, altura) => {return true ? largura > altura : largura < altura} 

console.log(ePaisagem(1440, 9000))