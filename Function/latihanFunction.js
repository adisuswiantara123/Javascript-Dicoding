function minimal(a,b){
    if(a<b){
      return a;
    }
    else if(a>b){
        return b;
    }
    else{
        return a;
    }
};

console.log(minimal(1, 4)) // output: 1
console.log(minimal(3, 2)) // output: 2
console.log(minimal(3, 3)) // output: 3


function findIndex(array, number) {
    for (let i = 0; i < array.length; i++) { // Menggunakan array.length
      if (array[i] === number) {
        return i; // Mengembalikan indeks jika angka ditemukan
      }
    }
    return -1; // Mengembalikan -1 jika angka tidak ditemukan
  }
  
  // Contoh penggunaan:
  console.log(findIndex([1, 2, 3, 4, 5], 3)); // Output: 2
  console.log(findIndex([1, 2, 3, 4, 5], 6)); // Output: -1
  console.log(findIndex([1, 2, 3, 4, 5], 5)); // Output: 4
  