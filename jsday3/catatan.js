BAB = 1.3 = STRUKTUR-KONTROL

// ===== Percabangan IF ELSE =====

let nilai = 85

if (nilai >= 90) {
  console.log("Grade: A");
} else if (nilai >= 80) {
  console.log("Grade: B");
} else if (nilai >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}
Penjelasan:
// - if digunakan untuk kondisi pertama
// - else if untuk kondisi tambahan
// - else untuk kondisi default (jika semua salah)

// ===== Percabangan SWITCH =====
let hari = 3;

switch (hari) {
  case 1:
    console.log("Hari ini: Senin");
    break;
  case 2:
    console.log("Hari ini: Selasa");
    break;
  case 3:
    console.log("Hari ini: Rabu");
    break;
  default:
    console.log("Hari tidak valid");
    break;
}

Penjelasan:
// - switch cocok untuk banyak pilihan dengan nilai pasti
// - gunakan break agar tidak lanjut ke case berikutnya

// ===== PERULANGAN =====

// FOR LOOP
for (let i = 1; i <= 5; i++) {
  console.log(For Loop ke-${i});
}

// WHILE LOOP
let x = 1;
while (x <= 5) {
  console.log(While Loop ke-${x});
  x++;
}

// DO...WHILE LOOP
let y = 1;
do {
  console.log(Do While Loop ke-${y});
  y++;
} while (y <= 5);

Penjelasan:
// - for: jumlah perulangan sudah diketahui
// - while: jalankan selama kondisi benar
// - do...while: jalankan minimal sekali meskipun kondisi salah

BAB = 1.4 = FUNGSI

// ===== Deklarasi Fungsi Sederhana =====
function sapa() {
  console.log("Halo! Selamat datang di JavaScript.");
}
sapa(); // memanggil fungsi

// ===== Fungsi dengan Parameter & Return =====
function tambah(a, b) {
  return a + b;
}
console.log(Hasil tambah: ${tambah(5, 3)});

Penjelasan:
// - Parameter: a, b (input ke fungsi)
// - return: mengembalikan nilai


// ===== Fungsi Ekspresi =====
const kali = function(x, y) {
  return x * y;
};
console.log(Hasil kali: ${kali(4, 6)});


// ===== Arrow Function (ES6) =====
const kurang = (x, y) => x - y;
console.log(Hasil kurang: ${kurang(10, 4)});


// ===== Contoh Fungsi Lain =====
function luasPersegi(sisi) {
  return sisi * sisi;
}
console.log(Luas persegi: ${luasPersegi(5)});