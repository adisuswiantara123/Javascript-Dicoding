let z;
console.log(typeof(z));
/* output: undefined */



let x = 10;
console.log(typeof(x)) // Output: Number



let y = 17.25;
console.log(typeof(y)) // Output: Number

console.log("****")

let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)


console.log("****");


/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

console.log("****");

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

console.log("****");


console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

console.log("****");

let greet = "Hello";
console.log(typeof(greet))
/* output: string */
console.log("****");

let salam = "Hello";
let moreGreet = salam + salam;
console.log(moreGreet);

/* output: HelloHello */

const myName = "Finzche";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is FInzche. */



const id3 = Symbol("id");

console.log(id3);

/* output
Symbol(id)
*/

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

/* output
false
*/