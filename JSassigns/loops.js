for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;  // skip multiples of 3
  if (i === 17) break;       // stop at 17
  console.log(i);
}

let count = 0;
let n = 30;
while (n >= 10) {
  if (n % 2 === 0) {
    console.log(n);
    count++;
  }
  n--;
}
console.log("Total evens:", count);


const inputs = [20, 45, 60];
let idx = 0;
let num;
do {
  num = inputs[idx++];
  console.log("You entered:", num);
} while (num <= 50);
console.log("Thank you");


const colors = ["red", "green", "blue", "yellow", "purple"];
for (let i = 0; i < colors.length; i++) {
  colors[i] = colors[i].toUpperCase();
}
console.log(colors);


const student = {
  name: "Amit",
  age: 21,
  grade: "A",
  subjects: { math: 85, english: 78 }
};

// top-level keys
for (const key in student) {
  if (key !== "subjects") {
    console.log(`${key}: ${student[key]}`);
  }
}

// nested subjects
for (const subj in student.subjects) {
  console.log(`${subj}: ${student.subjects[subj]}`);
}




// 1. Color-based action (case-insensitive)
function trafficAction(color) {
  const up = color.toUpperCase();
  let action;
  if      (up === "GREEN")  action = "Go";
  else if (up === "YELLOW") action = "Slow down";
  else if (up === "RED")    action = "Stop";
  else                      action = "Invalid color";
  console.log(`Color is ${up}. Action: ${action}`);
}

trafficAction("Green");
trafficAction("YELLOW");
trafficAction("blue");

// 2. Day-of-week switch
function describeDay(day) {
  switch (day) {
    case "Mon":
      console.log("Start of work week");
      break;
    case "Tue":
    case "Wed":
    case "Thu":
      console.log("Midweek");
      break;
    case "Fri":
      console.log("Almost weekend");
      break;
    case "Sat":
    case "Sun":
      console.log("Weekend!");
      break;
    default:
      console.log("Invalid day");
  }
}

describeDay("Mon");
describeDay("Wed");
describeDay("Fri");
describeDay("Sun");


// Part 3: Array of book objects

const books = [
  { title: "The Hobbit",             author: "J.R.R. Tolkien",       year: 1937 },
  { title: "1984",                   author: "George Orwell",        year: 1949 },
  { title: "To Kill a Mockingbird",  author: "Harper Lee",           year: 1960 },
  { title: "Pride and Prejudice",    author: "Jane Austen",          year: 1813 },
  { title: "The Great Gatsby",       author: "F. Scott Fitzgerald",  year: 1925 },
  { title: "Moby Dick",              author: "Herman Melville",      year: 1851 },
  { title: "War and Peace",          author: "Leo Tolstoy",          year: 1869 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger",        year: 1951 },
  { title: "Brave New World",        author: "Aldous Huxley",        year: 1932 },
  { title: "Crime and Punishment",   author: "Fyodor Dostoevsky",    year: 1866 }
];

console.log(books);
