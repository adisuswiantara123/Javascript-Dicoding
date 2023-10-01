const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites); //bila ada ... nya output seperti di bawah/ tanda [] hilang

/* output
Seafood Salad Nugget Soup
*/


const others = ["Cake", "Pie", "Donut"];
const allFavorites = [...favorites, ...others];

console.log(allFavorites);





const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/