# Bagian A : Soal Teori

## 1.
### Callback Function
sebuah fungsi yg dikirimkan sebagai argumen ke dalam fungsi lain, agar dipanggil setelah proses tertentu telah selesai.  

### Promise
Promise adalah objek di JavaScript yang merepresentasikan hasil akhir dari operasi asynchronous.
memiliki status : 1. Pending: sedang berjalan 2. Fulfilled: berhasil 3.  Rejected: gagal

Bedanya dengan callback, Promise bisa ditulis lebih rapi pakai .then() dan .catch().

## 2.
### Promise Chaining & async/await
Kalau pakai Promise, kita harus sambung-sambung pakai `.then()`. kalau pakai async/await adalah cara modern untuk nulis kode Promise, tapi lebih simpel dan mirip kode sinkron.

### Contoh:
```javascript
//contoh async/await <br>
async function getData() {
  try {
    const resUser = await fetch("linkAPI");
    const user = await resUser.json();
    console.log("User:", user.name);

    const resPosts = await fetch("link API");
    const posts = await resPosts.json();
    console.log("Jumlah postingan:", posts.length);
  } catch (err) {
    console.log("Error:", err);
  }
}

getData();

// contoh promise chaining <br>
function getData() {
  fetch("link API")
    .then(res => res.json())
    .then(user => {
      console.log("User:", user.name);

      // Lanjut ambil postingan user
      return fetch("link API");
    })
    .then(res => res.json())
    .then(posts => {
      console.log("Jumlah postingan:", posts.length);
    })
    .catch(err => {
      console.log("Error:", err);
    });
}

getData();
```

## 3.
### Try...Catch
try...catch adalah fungsi untuk menangani error supaya program tidak berhenti mendadak.

### Contoh:
```javascript
//contoh try...catch
async function ambilData() {
  try {
    const res = await fetch("https://api.situs-tidak-ada.com/data"); 
    const data = await res.json();
    console.log("Data:", data);
  } catch (error) {
    console.log("Terjadi kesalahan saat mengambil data:", error.message);
  }
}

ambilData();
```
## 4.
### JSON.stringify() & JSON.parse()
JSON.stringify() Mengubah object/array JavaScript menjadi string JSON
JSON.parse() Mengubah string JSON kembali menjadi object/array JavaScript.

### Contoh:
```javascript
//contoh JSON.stringify()
const user = {
  nama: "kahfi",
  umur: 20,
  hobi: ["ngoding", "membaca"]
};

// Ubah object jadi string JSON
const jsonString = JSON.stringify(user);

console.log("Hasil stringify:", jsonString);
console.log("Tipe data:", typeof jsonString);

//contoh JSON.parse()
const dataString = '{"nama":"kahfi","umur":20,"hobi":["ngoding","membaca"]}';

// Ubah string JSON jadi object lagi
const userObj = JSON.parse(dataString);

console.log("Hasil parse:", userObj);
console.log("Nama user:", userObj.nama);
console.log("Tipe data:", typeof userObj);
```

## 5.
### Modularisasi
sangat penting agar mudah di pahami dan dibaca, bisa di pakai ulang, perwatan lebih mudah, memudahkan dalam kolaborasi. dan resikonya jika tidak ada modular akan menyebabkan error yg banyak.

