 function logGlobalThis() {
      console.log("Global function this:", this);
    }
    logGlobalThis(); // in browser → Window object

    // 2. Regular function
    function regularFunction() {
      console.log("Regular function this:", this);
    }
    regularFunction(); // in strict mode → undefined; non-strict → Window

    // 3. Object method
    const obj = {
      name: "MyObject",
      logThis() {
        console.log("Object method this:", this);
      },
      arrowLog: () => {
        console.log("Arrow in object this:", this);
      }
    };
    obj.logThis();    // → obj
    obj.arrowLog();   // → inherits this from enclosing (global) scope

    document.getElementById("myButton")
      .addEventListener("click", function(event) {
        console.log("Button click this:", this); 
        // → the button element
      });


  
    function scoreTracker() {
      let score = 0;
      return function(points) {
        score += points;
        console.log("Total score:", score);
      };
    }
    const addScore = scoreTracker();
    addScore(5);  // Total score: 5
    addScore(10); // Total score: 15

   
    function createBankAccount(initialBalance = 0) {
      let balance = initialBalance;
      return {
        deposit(amount) {
          if (amount > 0) {
            balance += amount;
            console.log(`Deposited ${amount}. New balance: ${balance}`);
          }
        },
        getBalance() {
          console.log("Current balance:", balance);
          return balance;
        }
      };
    }
    const account = createBankAccount(100);
    account.deposit(50);    // Deposited 50. New balance: 150
    account.getBalance();   // Current balance: 150

    
    const people = [
      { name: "Alice", age: 17 },
      { name: "Bob", age: 20 },
      { name: "Charlie", age: 15 },
      { name: "David", age: 22 }
    ];
    const adults = people
      .filter(person => person.age >= 18)
      .map(person => person.name);
    console.log("Adults:", adults); // ["Bob", "David"]

    // 2. Emails of active & verified users
    const users = [
      { email: "a@example.com", active: true,  verified: true  },
      { email: "b@example.com", active: false, verified: true  },
      { email: "c@example.com", active: true,  verified: false },
      { email: "d@example.com", active: true,  verified: true  }
    ];
    const validEmails = users
      .filter(u => u.active && u.verified)
      .map(u => u.email);
    console.log("Valid emails:", validEmails); // ["a@example.com","d@example.com"]

    // 3. Prices after 18% GST
    const prices = [100, 250, 399, 120];
    const pricesWithGst = prices.map(p => +(p * 1.18).toFixed(2));
    console.log("Prices with 18% GST:", pricesWithGst);
    // [118.00, 295.00, 470.82, 141.60]

    const words = ["Hello", "world", "JavaScript", "is", "Fun"];
    const capitalCount = words.filter(w => /^[A-Z]/.test(w)).length;
    console.log("Words starting with capital:", capitalCount); // 3