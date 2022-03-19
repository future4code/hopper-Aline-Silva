// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
    
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter(pares => (pares %2)== 0)
   
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    
    
    //console.log(retornaNumerosParesElevadosADois) // 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array)

    }
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   return Math.max.apply(num1, num2)
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numPares = []
    for (let i = 0; numPares.length < n; i++) {
        if (i % 2 == 0) {
            numPares.push(i)
        }
    }
    return numPares
}
retornaNPrimeirosPares(3) 


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    Math.sqrt(v1*v1 + v2*v2) 
   classificaTriangulo((1, 2, 4), (1, 2, 1), (5, 5, 5))
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}