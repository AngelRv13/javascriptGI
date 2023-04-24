var userNum1 = parseInt(prompt("Give me a number"));
var userNum2 = parseInt(prompt("Give me another number"));
var operation = prompt("Enter add or sub or multiply or divide");

function add(num1, num2) {
 return num1 + num2;
}

function sub(num1, num2) {
     return num1 - num2;

}
function multiply(num1, num2) {
  return num1 * num2;

}
function divide(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, operation) {
  if (operation == "add"){ 
   let result = add(num1, num2)
   return `${num1} ${operation} ${num2} = ${result}`
  }
   else if (operation == "sub"){
   let result = sub(num1, num2)
   return `${num1} ${operation} ${num2} = ${result}`
  } 
   else if (operation == "multiply") {
   let result = multiply(num1,num2)
   return `${num1} ${operation} ${num2} = ${result}`
   }
   else if (operation == "divide") {
   let result = divide(num1, num2)
   return `${num1} ${operation} ${num2} = ${result}`
   }
  
   else {
    console.log("Operation invalid")
  }
  
}


console.log(calc(userNum1, userNum2, operation));