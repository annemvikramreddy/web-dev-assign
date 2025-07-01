
let student = {
  name: "Vikram",
  age: 21,
  marks: [85, 92, 78],
  address: {
    city: "Coral Springs",
    state: "FL"
  }
};


console.log(student.name);              
console.log(student.address["city"]);   


student.age = 22;                       
student.isPassed = true;                


delete student.marks;

console.log(student);

// List all keys
console.log(Object.keys(student));   
// → ["name", "age", "address", "isPassed"]


console.log(Object.values(student)); 
// → ["Vikram", 22, {…}, true]


console.log(Object.entries(student));
/*
→ [
     ["name", "Vikram"],
     ["age", 22],
     ["address", { city: "Coral Springs", state: "FL" }],
     ["isPassed", true]
   ]
*/

console.log(student.hasOwnProperty("name"));   // true
console.log(student.hasOwnProperty("marks"));  // false

const classroom = {
  teacher: "Mr. Sharma",
  students: [
    { name: "Amit", age: 16 },
    { name: "Sara", age: 15 }
  ],
  subject: "Math"
};


console.log(classroom.students[1].name);  // "Sara"


classroom.students.push({ name: "Ravi", age: 17 });


classroom.subject = "Science";

console.log(classroom);
/*
→ {
     teacher: "Mr. Sharma",
     students: [
       { name: "Amit", age: 16 },
       { name: "Sara", age: 15 },
       { name: "Ravi", age: 17 }
     ],
     subject: "Science"
   }
*/
console.log(x);
var x = 5;

greet();
function greet() {
  console.log("Hello!");
}

// console.log(y);
let y = 10;
const calculator = {
  num1: 10,
  num2: 5,
  add: function() {
    return this.num1 + this.num2;
  }
};

// Call the method and log the result
console.log(calculator.add());  
