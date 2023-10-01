const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript'); //push untuk menambah data ke dalam array 
console.log(myArray);

/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

myArray.pop(); //pop untuk mengeluarkan elemen terakhir dari array, 
console.log(myArray);
/* output
[ Cokelat, 42.5, 22, true ]
*/

myArray.shift(); // shift() digunakan untuk mengeluarkan elemen pertama dari array
myArray.unshift("Apple"); //unshift() digunakan untuk menambahkan elemen di awal array.

console.log(myArray);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

delete myArray[1];
console.log(myArray);

/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
*/

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/


const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);

month.splice(1, 0, 'February');
console.log('after splice: ', month);