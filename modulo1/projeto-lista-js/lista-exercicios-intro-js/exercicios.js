// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  let soma
  return num1 + num2
}
console.log(soma(1 + 2))

// EXERCÍCIO 0B
function imprimeMensagem() {
  
  const mensagem = prompt('Digite uma mensagem!')

}    
  console.log(mensagem)


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
   
   let altura = Number(prompt("digite a altura para o retangulo:"))
   let largura = Number(prompt("digite a altura para o retangulo:"))
   let areaDoRetangulo = altura * largura 

  console.log(areaDoRetangulo)
}   
// EXERCÍCIO 02
function imprimeIdade() {
  
  let ano = Number(prompt("Digite o ano atual")) 
  let idade = Number(prompt("Digite seu ano de nascimento"))
  let calcular = ano - idade

  console.log(calcular)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
 
}
// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

 const nome = prompt('nome')
 const idade = prompt('idade')
 const email = prompt('email')
 
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  
  const corX = prompt("Digite sua 1ª cor favorita")
  const corY = prompt("Digite sua 2ª cor favorita")
  const corZ = prompt("Digite sua 3ª cor favorita")
  const corFavorita = [corX, corY, corZ]

   console.log(corFavorita)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
   
   return string.toUpperCase() 

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
  return   custo / valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length 

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
  const recebe = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = recebe
  
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}