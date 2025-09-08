CLOSURES
Variabel JavaScript dapat berada dalam:
Lingkup lokal atau lingkup global
Variabel global dapat dibuat lokal (privat) dengan closure.
Closure memungkinkan suatu fungsi memiliki variabel "privat".

contoh
lokal :  
function myFunction() {
  let a = 4;
  return a * a;
}
console.log(myFunction());

Global :
let a = 4;
function myFunction() {
  return a * a;
}
console.log(myFunction());

SCOPING 
Variabel yang dideklarasikan secara Global (di luar blok atau fungsi apa pun) memiliki Cakupan Global.
Variabel global dapat diakses dari mana saja dalam program JavaScript.
Variabel yang dideklarasikan dengan var, let, dan const cukup mirip ketika dideklarasikan di luar blok.

global Scope:
let carName = "Volvo";
function myFunction() {
}

function scope: 
function myFunction1() {
  var carName = "Volvo";  // Function Scope
}
function myFunction2() {
  let carName = "Volvo";  // Function Scope
}
function myFunction3() {
  const carName = "Volvo";  // Function Scope
}

Hoisting
mekanisme JavaScript di mana deklarasi variabel (var) dan function secara otomatis “diangkat” ke atas scope-nya sebelum kode dijalankan.
Artinya, kita bisa memanggil function atau variabel sebelum dideklarasikan, tapi ada beberapa aturan penting.

console.log(sapa("Ali")); // Halo Ali

function sapa(nama) {
  return "Halo " + nama;
}