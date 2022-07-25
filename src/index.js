import validator from './validator.js';
let button = document.getElementById ("buttonSend")//declarar button llamar id "button" desde index.html
button.addEventListener ("click", function (e) {
   e.preventDefault ()
let cardNumber= document.getElementById ("cardNumber").value;

let validacion= validator.isValid(cardNumber);
//let tarjetaOculta = validator.maskify(cardNumber);
if (validacion){
  document.getElementById("results").innerHTML = "Tu tarjeta es valida!" + "<br/>" ;
 
  
}else{ 
  document.getElementById("results").innerHTML = "Tu tarjeta es invalida!" + "<br/>" ; 
 
}
console.log(validator);

});