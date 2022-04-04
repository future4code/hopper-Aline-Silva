// ------ Exercício de interpretação ------//

//1.
 /* Vai ser impresso no console, as informações, o indice que se encontra cada
elemento e a repetição das informações dentro do array
 */

 //2
 /* Vai ser impresso no concole somente o retorno dos nomes dos usuários */

 //3.

 // ------------------------


 // ------ Exercício de escrita ------//

 //1.

 //a
 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArray = pets.map((pets) =>{ 
    return pets.nome
}) 
console.log(novoArray)

//b
 const novoArray2 = pets.filter ((pets) => {
    return pets.raca === "Salsicha"

 })
console.log(novoArray2)

//c
 const cupomDePromocao = poodle.map((poodle) => {
     return `Você ganhou um cupom de desconto de 10% para tosa o/a ${poodle.nome}!`

})
    
console.log(cupomDePromocao) 


 