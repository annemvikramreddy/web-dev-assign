
let a = 10;
let b = 3;
console.log("Addition:     ", a + b);  // 13
console.log("Subtraction:  ", a - b);  // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:      ", a / b);  // 3.333...
console.log("Modulus:       ", a % b);  // 1

console.log('10 == "10":  ', 10 == "10");  
console.log('10 === "10": ', 10 === "10"); 
console.log("5 < 10:      ", 5 < 10);      
console.log("15 > 20:     ", 15 > 20);     


const isStudent = true;
const hasID     = false;
console.log("AND (&&):    ", isStudent && hasID); // false
console.log("OR (||):     ", isStudent || hasID); // true
console.log("NOT (!hasID):", !hasID);            // true


console.log('"5" + 1  =', "5" + 1);

console.log('"5" - 1  =', "5" - 1);

console.log('true + "yes" =', true + "yes");

console.log('false + 5    =', false + 5);

console.log('Number("42")   =', Number("42"));   
console.log('String(123)    =', String(123));    
console.log('Boolean(0)     =', Boolean(0));     
// a. Create and Access an Array
let fruits = ["apple", "banana", "cherry"];
console.log("Second fruit:", fruits[1]); 

fruits[1] = "mango";          
fruits.push("orange");      
console.log("After push: ", fruits);
fruits.pop();              
console.log("After pop:  ", fruits);


console.log("Length:", fruits.length); // 3

const numbers = [1, 2, 3, 4, 5];
console.log("original:", numbers);

console.log("unshift(0):", numbers.unshift(0), numbers);


console.log("shift():   ", numbers.shift(), numbers);


console.log("includes 3?:", numbers.includes(3));  // true
console.log("indexOf 4?:", numbers.indexOf(4));    // 3

console.log("slice(1,4):", numbers.slice(1, 4));  // [2,3,4]
console.log("after slice unchanged:", numbers);

console.log("splice(2,2):", numbers.splice(2, 2), numbers);


console.log("reverse():", numbers.reverse());     

console.log("5 + 3 =", 5 + 3);          // 8
console.log('"Hello" + "!" =', "Hello" + "!"); // "Hello!"
console.log("7 > 2 =", 7 > 2);          // true


const marks = 65;
const result = marks > 50
  ? "Pass"
  : "Fail";
console.log(`Marks: ${marks} →`, result);

console.log(marks > 50 ? "Pass" : "Fail");


function greet() {
  console.log("Welcome to the JavaScript demo!");
}
greet();


function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
greetUser("Vikram");


function addNumbers(x, y) {
  console.log(`${x} + ${y} =`, x + y);
}
addNumbers(7, 8);


function difference(x, y) {
  return x - y;
}
const diff = difference(10, 4);
console.log("Difference:", diff);


function isGreaterThan100(num) {
  return num > 100;
}
console.log("150 > 100?", isGreaterThan100(150)); // true


function bothTrue(val1, val2) {
  return val1 && val2;
}
console.log("true && false =", bothTrue(true, false)); // false


function logFirstItem(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
  } else {
    console.log("First item:", arr[0]);
  }
}
logFirstItem(["x", "y", "z"]);