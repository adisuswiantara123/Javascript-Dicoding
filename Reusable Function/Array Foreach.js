// cara imperatif

// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
// for(let i = 0; i < names.length; i++) {
//   console.log(`Hello, ${names[i]}!`);
// }
 


// cara deklaratif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 * 
 */



// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
// for(let i = 0; i < names.length; i++) {
//   if(names[i] === 'Jeff') continue; // Bisa!
  
//   console.log(`Hello, ${names[i]}!`);
// }
 
// names.forEach((name) => {
//   if(name === 'Jeff') continue; // Tidak Bisa!
//   console.log(`Hello, ${name}`);
// });