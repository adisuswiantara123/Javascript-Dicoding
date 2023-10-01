const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
  ]);
  
  console.log(myMap);
  
  /* output
  Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
  */


  const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  ]);
  
  console.log(capital.size);
  console.log(capital.get("London"));
  capital.set("New Delhi", "India");
  console.log(capital.size);
  console.log(capital.get("New Delhi"));
  
  /* output
  3
  England
  4
  India
   */


const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(visitsCountMap);
}, 10000)

/* output
Map(1) { { name: 'Jonas' } => 1 }
*/

