variable adalah  wadah untuk menyimpan data
contoh : let nama = "kahfi"; // "nama" adalah variabel, isinya "kahfi"

values adalah isi dari variable
contoh : let umur = 22; // 22 adalah value

deklarasi variable atau bisa membuat variable menggunakan : var,let,const

perbedaan var,let,const adalah :
var   | bisa di ubah       | bisa di deklarasikan ulang       | function scope
let   | bisa di ubah       | tidak bisa di deklarasikan ulang | block scope
const | tidak bisa di ubah | tidak bisa di deklarasikan ulang | block scope

apa itu scope : scope adalah batas area dimana variable bisa di akses

ada 3 jenis scope :
1.global scope 
  variable bisa di pakai dimana saja 
  contoh : 
  let nama = "kahfi"; // global
function tampil() {
    console.log(nama); // bisa akses
}
tampil();

2.function scope (khusus var)
  variable bisa di pakai di dalam function saja
  contoh : 
  function tes() {
    var x = 10; // function scope
    console.log(x);
}
// console.log(x); // ERROR (di luar function)

3.block scope (let dan const)
  variable bisa di pakai di dalam block saja {} (misal if,loop)
  contoh :
   if (true) {
    let y = 20; // block scope
    console.log(y);
}
// console.log(y); // ERROR (di luar blok)

// Tipe Data Primitif di JavaScript

// 1. String: Teks, diapit oleh tanda kutip
let nama = "kahfi"; // String
console.log("String:", nama);

// 2. Number: Angka bulat atau desimal
let umur = 20; // Number
let tinggi = 175.5;
console.log("Number:", umur, tinggi);

// 3. Boolean: true atau false
let isStudent = true;
let sudahBayar = false;
console.log("Boolean:", isStudent, sudahBayar);

// 4. Null: Nilai kosong secara sengaja
let dataKosong = null;
console.log("Null:", dataKosong);

// 5. Undefined: Nilai belum ditentukan
let alamat;
console.log("Undefined:", alamat);

// Operator di JavaScript

// 1. Operator Aritmatika
let a = 10;
let b = 3;
console.log("Tambah:", a + b); // 13
console.log("Kurang:", a - b); // 7
console.log("Kali:", a * b);   // 30
console.log("Bagi:", a / b);   // 3.333...
console.log("Sisa Bagi:", a % b); // 1

// 2. Operator Perbandingan (Hasil: true/false)
console.log("== :", 5 == "5");   // true
console.log("=== :", 5 === "5"); // false
console.log("!= :", 5 != "5");   // false
console.log("!== :", 5 !== "5"); // true
console.log(">  :", 7 > 5);      // true
console.log("<  :", 3 < 5);      // true
console.log(">= :", 5 >= 5);     // true
console.log("<= :", 4 <= 5);     // true

// 3. Operator Logika
console.log("AND (&&):", (5 > 3 && 2 < 4)); // true
console