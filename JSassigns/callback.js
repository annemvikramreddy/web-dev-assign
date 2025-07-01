let student = {
  name: "Vikram",
  age: 21,
  marks: [85, 92, 78],
  address: {
    city: "Coral Springs",
    state: "FL"
  }
};

// Access properties
console.log("Student name:", student.name);              // Vikram
console.log("City:", student.address["city"]);           // Coral Springs


student.age = 22;
student.isPassed = true;

// Delete a property
delete student.marks;

console.log("Modified student object:", student);




console.log("Object.keys:", Object.keys(student));
console.log("Object.values:", Object.values(student));
console.log("Object.entries:", Object.entries(student));
console.log("Has 'name'?", student.hasOwnProperty("name"));
console.log("Has 'marks'?", student.hasOwnProperty("marks"));


const classroom = {
  teacher: "Mr. Sharma",
  students: [
    { name: "Amit", age: 16 },
    { name: "Sara", age: 15 }
  ],
  subject: "Math"
};

console.log("Second student's name:", classroom.students[1].name);

classroom.students.push({ name: "Ravi", age: 17 });
classroom.subject = "Science";

console.log("Modified classroom:", classroom);




console.log("x before declaration:", x); 
var x = 5;

greet();
function greet() {
  console.log("Hello!");
}

try {
  console.log("y before declaration:", y);
} catch (err) {
  console.log("Error accessing y before init:", err.message);
}
let y = 10;




const calculator = {
  num1: 10,
  num2: 5,
  add: function() {
    return this.num1 + this.num2;
  }
};

console.log("Calculator add():", calculator.add());




greetUser("Alice", "morning"); // Good morning, Alice!

function greetUser(name, timeOfDay) {
  console.log(`Good ${timeOfDay}, ${name}!`);
}




const calculateArea = function(shape, dims) {
  if (shape === "rectangle") {
    return dims.width * dims.height;
  } else if (shape === "triangle") {
    return (dims.base * dims.height) / 2;
  } else {
    throw new Error("Unsupported shape: " + shape);
  }
};

console.log("Rectangle area:", calculateArea("rectangle", { width: 10, height: 5 }));
console.log("Triangle area: ", calculateArea("triangle",  { base: 6, height: 4 }));



const formatResults = nums =>
  nums
    .map(n => n * n)
    .map(sq => `Result: ${sq}`);

console.log("Formatted results:", formatResults([1,2,3,4]));




const square = n => n * n;
console.log("Squares:", [1,2,3,4].map(square));




setTimeout(function() {
  console.log("Executed after delay");
}, 2000);



const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};

console.log("Factorial of 5:", factorial(5));




let globalVar = "Global Scope";

function testScope() {
  let functionVar = "Function Scope";

  if (true) {
    let blockLet     = "Block Scope (let)";
    const blockConst = "Block Scope (const)";
    var blockVar     = "Function Scope (var)";
    console.log(blockLet, blockConst, blockVar);
  }

  console.log("functionVar inside:", functionVar);     // accessible
  console.log("blockVar inside:", blockVar);           // accessible
  // console.log(blockLet); // would throw ReferenceError
}

testScope();

console.log("globalVar outside:", globalVar);
// console.log(functionVar); // would throw ReferenceError



function processData(number, callback) {
  const message = number > 10 ? "High" : "Low";
  callback(number, message);
}

processData(7, function(num, msg) {
  console.log(`Value ${num} is ${msg}`);
});

processData(15, (n, m) => {
  console.log(`Value ${n} is ${m}`);
});




const person = {
  firstName: "Jane",
  lastName:  "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log("Full name:", person.getFullName());

const counter = {
  count: 0,
  start() {
    setInterval(() => {
      this.count++;
      console.log("Count is now:", this.count);
    }, 1000);
  }
};

counter.start();
