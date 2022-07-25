const validator = {
  isValid: function (cardNumber) {
    let numCard = cardNumber.split("").reverse().map(Number)//Se declara la variable dividiendo los elementos de la variable cardNumber  let longArreglo = (numCard.length);
    //console.log(numCard)
  
let sum = 0; //verifica que la suma final sea 0 //

for (let i = 0; i < numCard.length; i++) {
  if (i % 2 === 1) {
    let multiplicar = numCard[i] * 2
    console.log(multiplicar)
    if (multiplicar > 9) {
      let resultadoFinal = multiplicar - 9
      sum += resultadoFinal
    } else {
      sum += multiplicar;                 
//console.log(multiplicar);
    }
  } else /*condicional para posiciones pares*/ {
    sum += numCard[i];}
}

let results = sum % 10; //nueva variable para resultado final de la operación// 
        if (results === 0) {
            return true;
        } else {
            return false;
        }
      }}
      console.log(results)
    
  

export default validator;


