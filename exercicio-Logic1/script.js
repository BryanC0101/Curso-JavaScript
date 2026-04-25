// Escreva uma função que receba 2 números e retorne o maior deles

let num1 = 23;
let num2 = 848;

// function maiorNum(num1, num2) {
//     if (num1 > num2) {
//         return num1
//     }else{
//         return num2
//     }
// }

// console.log(maiorNum(num1, num2))

const maiorNum = (num1, num2) => { return num1 > num2 ? num1 :  num2 }
console.log(maiorNum(num1, num2))