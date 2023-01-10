let sentence = prompt("What's your sentence to encode");
  
let fL =function() {
let firstAndLastChar = sentence.slice(0,1) + sentence.slice(-1);
  let firstAndLastCharUpper = firstAndLastChar.toUpperCase();
    return firstAndLastCharUpper;

}

let rev = function() { 
  let fls =fL();
  let lf = fls.slice(-1) + fls.slice(0,1);
console.log(lf);
}
rev();