// //1.
// const barang1 = { nama: "Buku", harga: 10000 };
// const barang = [
//   { nama: "Buku", harga: 10000 },
//   { nama: "Pensil", harga: 2000 },
// ];

// const jsonString = JSON.stringify(barang);

// console.log(jsonString);

// //2.
// function hitungLuas(panjang, lebar, callback) {
//   const hasil = panjang * lebar;
//   callback(hasil); 
// }

// hitungLuas(10, 7, function(luas) {
//   console.log("Luas persegi panjang adalah:", luas);
// });

// //3.
// function ambilUsers() {
//   fetch("https://equran.id/api/surat")
//     .then(res => res.json())        
//     .then(data => {
//       console.log("Data users:", data); 
//     })
//     .catch(error => {
//       console.log("Terjadi error:", error);
//     });
// }

// ambilUsers();

// //4.
// const data = '{"nama":"Andi","umur":20}';
// const obj = JSON.parse(data);

// console.log("Nama:", obj.nama);
// console.log("Umur:", obj.umur);

// //5.
// function sayHello(callback) {
//   setTimeout(() => {
//     callback("Hai");
//   }, 2000); 
// }

// sayHello(function(pesan) {
//   console.log(pesan);
// });

// //7.
// function ambilData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data Berhasil Diambil");
//     }, 3000); 
//   });
// }

// ambilData()
//   .then(pesan => {
//     console.log(pesan);
//   })

// //8.
// function proses(step) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(step);
//     }, 1000); 
//   });
// }

// proses("Step 1: Login User")
//   .then(result => {
//     console.log(result);
//     return proses("Step 2: Ambil Data");
//   })
//   .then(result => {
//     console.log(result);
//     return proses("Step 3: Tampilkan Dashboard");
//   })
//   .then(result => {
//     console.log(result);
//   })

// //10.
// function bagi(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Tidak bisa membagi dengan nol");
//     }
//     return a / b;
//   } catch (error) {
//     console.log("Error:", error.message);
//     return null; 
//   }
// }

// bagi(10, 0); 

//12.
// async function ambilUsers(id) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/{id}`);
//     const data = await res.json();
//     return data;
// }

// ambilUsers()

//13.
// const angka = [1, 2, 3, 4, 5];
// const kuadrat = angka.map(num => num * num);

// console.log(kuadrat);

//14.
// async function ambilPosts() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log("Terjadi error:", error.message);
//   }
// }

// ambilPosts();

//15.
// const jsonString = '{"id":1,"nama":"kahfi","status":"inactive"}';
// let obj = JSON.parse(jsonString);
// obj.status = "active";

// const hasil = JSON.stringify(obj);

// console.log("JSON string baru:", hasil);

//16.
// function getProduk(stok) {
//   return new Promise((resolve, reject) => {
//     if (stok > 0) {
//       resolve("Produk Tersedia"); 
//     } else {
//       reject("Produk Habis"); 
//     }
//   });
// }

// getProduk(5) 
//   .then(pesan => {
//     console.log(pesan); 
//   })
//   .catch(error => {
//     console.log(error); 
//   });

//18.
// function connectDatabase() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(" Connect Database");
//     }, 1000);
//   });
// }

// function ambilDataProduk() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(" Ambil Data Produk");
//     }, 1000);
//   });
// }

// function tampilkanData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(" Tampilkan Data");
//     }, 1000);
//   });
// }

// // Promise chaining
// connectDatabase()
//   .then((msg) => {
//     console.log(msg);
//     return ambilDataProduk();
//   })
//   .then((msg) => {
//     console.log(msg);
//     return tampilkanData();
//   })
//   .then((msg) => {
//     console.log(msg);
//     console.log("Semua proses selesai");
//   })
//   .catch((error) => {
//     console.error("Terjadi error:", error);
//   });

  //19.
// function login(username, callback) {
//   setTimeout(() => {
//     console.log("Login sukses:", username);
//     callback();
//   }, 1000);
// }

// function ambilData(callback) {
//   setTimeout(() => {
//     console.log(" Data berhasil diambil");
//     callback();
//   }, 1000);
// }

// function tampilkanData(callback) {
//   setTimeout(() => {
//     console.log("Data ditampilkan ke user");
//     callback();
//   }, 1000);
// }

// function simpanLog(callback) {
//   setTimeout(() => {
//     console.log(" Log disimpan");
//     callback();
//   }, 1000);
// }


// login("kahfi", () => {
//   ambilData(() => {
//     tampilkanData(() => {
//       simpanLog(() => {
//         console.log(" Semua proses selesai (Callback Hell)");
//       });
//     });
//   });
// });

// function login(username) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Login sukses:", username);
//       resolve();
//     }, 1000);
//   });
// }

// function ambilData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(" Data berhasil diambil");
//       resolve();
//     }, 1000);
//   });
// }

// function tampilkanData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(" Data ditampilkan ke user");
//       resolve();
//     }, 1000);
//   });
// }

// function simpanLog() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(" Log disimpan");
//       resolve();
//     }, 1000);
//   });
// }

// login("Afi")
//   .then(() => ambilData())
//   .then(() => tampilkanData())
//   .then(() => simpanLog())
//   .then(() => console.log(" Semua proses selesai (Promise chaining)"))
//   .catch((err) => console.error(" Error:", err));

//21.
// async function getGmailComments() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//     const data = await response.json();
//     const gmailComments = data.filter(c => c.email.includes("@gmail.com"));

//     console.log("Total komentar dengan email Gmail:", gmailComments.length);
//     console.log(gmailComments);
//   } catch (error) {
//     console.error("Terjadi error:", error);
//   }
// }

// getGmailComments();

//22.
// async function prosesData(data) {
//   try {
//     if (!data || data.length === 0) {
//       throw new Error("Data tidak boleh kosong");
//     }

//     console.log(" Data berhasil diproses:", data);
//   } catch (error) {
//     console.error("Terjadi error:", error.message);
//   }
// }

// prosesData([1, 2, 3]);   
// prosesData([]);       

