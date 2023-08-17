'use strict'

let fahrenheit = [45, 32, 0, 50, 75, 80, 120, 99]
let celsius = [];
celsius = fahrenheit.map(el => Math.round(el - 32) * 5 / 9);
console.log(celsius);
console.log(fahrenheit);

let fahrenheitImp = fahrenheit.map((el, i) => i % 2 === 0 ? '*' : el)
console.log(fahrenheitImp);

/*******************************
 #1 (8kyu)
 * ********************************* */
let number1 = [[10, 0], [3, 5], [5, 8]]
let number2 = [[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]
let number3 = [[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]

let result1 = (number1.map(el =>  el[0]- el[1])).reduce((a,v)=> a+v)

/** La function equivalente*/
function NbrPer(number) {
   return number.map(el => el[0] - el[1]).reduce((a, v) => a + v)
}
let rr = NbrPer(number1)
console.log(rr);
console.log(NbrPer(number1));
console.log(NbrPer(number2));
console.log(NbrPer(number3));
// console.log( result1);

/*******************************
 #2 (8kyu)
 * ********************************* */
let tab1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]
    
let tabb = tab1.map(el => el === true ? el = 1 : el = 0).reduce((a, v) => a + v)
console.log(tabb);

/**La function equivalente */
function Count(tab) {
    return tab.map(el => el === true ? el = 1 : 0).reduce((a, v) => a + v);
}

console.log(Count(tab1)); 
/*******************************
 #3 (8kyu)
 * ********************************* */

 function removeChar(params) {
  params.join("")
 }
let varr = "Ceci est une phrase"
//  console.log(removeChar(varr));



