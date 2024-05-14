//var frase = "Olá mundo!"
//window.alert(5+9)

//bool
var chuva = false
var sol = true

//number
var idade = 18
var altura = 1.75

//string
var nome = "Sergio"

console.log(typeof(sol))
console.log(typeof(altura))
console.log(typeof(nome))

//var = escopo global; permite null; pode ser alterada
var sobrenome = "Santos"
sobrenome = "Rochedo"

//let = escopo em bloco/local; permite null; pode ser alterada
let aluno = "Ana"
aluno = "bia"

//const = escopo local; nao pode ser alterada; nao permite null
const comida = "lasanha"

if (true){
    var animal = "gato"
    console.log("dentro do bloco", animal)
}
//console.log(animal)

document.getElementById("test").innerHTML = nome;

var comparacao = "0" == 0
console.log(comparacao)

var comparacao2 = "0" === 0
console.log(comparacao2)