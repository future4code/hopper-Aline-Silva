```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let notaP1 = p1 * 2
  let notaP2 = p2 * 3
  let notaFinal = (ex + (p1) * 2) + (p2 * 3)) / 6
 
  if (notaFinal >= 9){
    return "A"
  }
    else if (notaFinal < 9 && notaFinal >= 7.5){
    return "B"
  }
    else if (notaFinal <7.5 && notaFinal >= 6){
    return "C"
  }
    else {
    return "D"
  }  
  
}```   