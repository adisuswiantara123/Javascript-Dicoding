// Membuat array evenNumber untuk menampung bilangan genap
const evenNumber = [];

// Mengisi array evenNumber dengan bilangan genap dari 1 hingga 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumber.push(i);
  }
}

// Menampilkan isi array evenNumber
console.log(evenNumber);
