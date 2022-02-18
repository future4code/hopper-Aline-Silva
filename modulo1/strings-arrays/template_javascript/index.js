//-------Exercícios de interpretação-------//

//1°//

//resultado 1- undefined//
//resultado 2- null//
//resultado 3- 11//
//resultado 4- 3//
//resultado 5- array(11)//
//resultado 6- 9//

//2°//

/* Todas as letras ficaram em caixa alta, me dira a quantidade de caracteres 
que são 27*/


//-------Exercícios de escrita de código------//

// 1. //

/*const nome = prompt("Escreva seu nome") 
const emailDoUsuario = prompt("Digite seu e-mail")

const email =  emailDoUsuario 
console.log(email.trim())

console.log('O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vindo(a) ${nome}')*/
 


// 2. //

//a//  
/*const comidasFavoritas = ["Macarrão", nomeComida, "Frango", "Ovos", "Banana"] 
console.log(comidasFavoritas)

//b//
console.log(`Essas são minhas comidas favoritas, ${comidasFavoritas[0]}`)
console.log(`Essas são minhas comidas favoritas, ${comidasFavoritas[1]}`)
console.log(`Essas são minhas comidas favoritas, ${comidasFavoritas[2]}`)
console.log(`Essas são minhas comidas favoritas, ${comidasFavoritas[3]}`)
console.log(`Essas são minhas comidas favoritas, ${comidasFavoritas[4]}`)*/

//c//
/*const nomeComida = prompt("Escreva uma comida preferida")
const comidasFavoritas = [`"Macarrão", ${nomeComida}, "Frango", "Ovos", "Banana"`] 
console.log(comidasFavoritas)
console.log (`novalista ${nomeComida}`)*/

// 3. //

//a//
let listaDeTarefas = []
let tarefa1 = prompt("Diga uma tarefa que você faz no dia")
let tarefa2 = prompt("Diga mais um tarefa que você faz no dia")
let tarefa3 = prompt("Diga a 3° tarefas que você faz no dia")

//b//
listaDeTarefas[0] = tarefa1
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3
console.log(listaDeTarefas)

//d//
let indiceUsuario = prompt("Digite índice de uma tarefa entre 0, 1 ou 2")

//e//
listaDeTarefas.splice(indiceUsuario, 1)
//f// 
console.log(listaDeTarefas)








