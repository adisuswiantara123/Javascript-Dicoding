let lastName = "Finzche always hunts you";

console.log(lastName);

function exampleLet() {
    if (true) {
        let y = 20;
        console.log(y); //harus dalam cakupan fungsi ini
    }
    
}


function exampleVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); // Output: 10
  }
  


function exampleConst() {
    const z = 30;
    // z = 40; // Error: Assignment to constant variable
    console.log(z); // Output: 30
  }
  
exampleLet();

exampleVar();

exampleConst();


let myVariable = 12;
myVariable = 30;
myVariable = 5;

console.log(myVariable);


