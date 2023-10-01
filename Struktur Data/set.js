const numberSet = new Set([1, 4, 6, 4, 1]); //set untuk mengurutkan dari terkecil hingga terbesar)
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4); //bila handak mehapus

console.log(numberSet);

/* output
Set(5) { 1, 4, 6, 5, 10 }
*/