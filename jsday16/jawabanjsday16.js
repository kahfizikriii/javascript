//1.
// async function showUser() {
//     console.log("Halo dari async")
// }

// showUser()

// //2.
// function ambildata() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data berhasil diambil")
//         }, 2000)
//     })
// }

// async function showUser() {
//     const User = await ambildata();
//     console.log(User)
// }

// showUser()

//3.
// function getnumber() {
//     return "42"
// }

// async function showUser() {
//     const User = await getnumber();
//     console.log(User)
// }

// showUser()

//4.
// function tambahlima(x) {
//     return new Promise((resolve) => {
//         resolve(x + 5)
//     })
// }

// async function main() {
//     const x = 10
//     const User = await tambahlima(x);
//     console.log(User)
    
// }

// main()

//5.
// async function throwError() {
//       throw new Error("Terjadi kesalahan");
// }

// async function main() {
//   try {
//     await throwError();
//     console.log("Baris ini tidak akan dijalankan"); 
//   } catch (err) {
 
//     console.error("Error tertangkap:", err.message);
//   }
// }

// main();

//6.
// async function fetchData() {
//     try {
//         const response = await fetch("https://equran.id/api/v2/tafsir/112")
//         const data = await response.json()
//         console.log(data)
//     } catch (e) {
//         console.error("nama latin", e)
//     }
// }

// fetchData()

//7.
// async function fetchData() {
//     try {
//         const response = await fetch("https://equran.id/api/v2/tafsir/112")
//         const data = await response.json()
//         console.log(data)
//     } catch (e) {
//         console.error("nama latin", e)
//     }
// }

// fetchData()

//7.
// async function ambilData() {
//   const response = await fetch("https://equran.id/api/v2/tafsir/112");

//   if (!response.ok) {
//     throw new Error("Gagal mengambil data");
//   }
//   const data = await response.json();
//   return data;
// }

// async function main() {
//   try {
//     const url = "https://equran.id/api/v2/tafsir/112"; 
//     const hasil = await ambilData();
//     console.log("Data berhasil diambil:", hasil);
//   } catch (e) {
//     console.error("Error tertangkap:", e.message);
//   }
// }

// main();

//8.
// async function ambilData() {
//   const response = await fetch("https://equran.id/api/v2/tafsir/112");

//   if (!response.ok) {
//     throw new Error("Gagal mengambil data");
//   }
//   const data = await response.json();
//   return data;
// }

// async function main() {
//   try {
//     const url = "https://equran.id/api/v2/tafsir/112"; 
//     const hasil = await ambilData();
//     console.log("Data berhasil diambil:", hasil);
//   } catch (e) {
//     console.error("Error tertangkap:", e.message);
//   }
//   finally {
//     console.log("Proses selesai")
//   }
// }

// main();

//9.
// async function getTafsirSurat112() {
//   try {
//     const url = 'https://equran.id/api/v2/tafsir/112';
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Gagal mengambil data tafsir');
//     }
//     const result = await response.json();
//         const tafsirData = result.data; 
//     for (const item of tafsirData.ayat) {
//            console.log(`Ayat ke-${item.nomor}: ${item.teks}`); 
//     }
//   } finally {
//     console.log('Proses pengambilan tafsir selesai.');
//   }
// }

// getTafsirSurat112();

//10.
// async function fetchSuratSalah() {
//   try {
//     const url = "https://equran.id/api/v2/surattidakada";
//     const response = await fetch();

//     if (!response.ok) {
//       throw new Error("Gagal mengambil data dari API (endpoint tidak ada)");
//     }
//     const data = await response.json();
//     console.log("Data:", data);

//   } catch (err) {
//     console.error("Error tertangkap:", err.message);
//   } finally {
//     console.log("Proses selesai.");
//   }
// }

// fetchSuratSalah();

//11.
// async function getSurat() {
//   try {
//     const urls = [
//       "https://equran.id/api/v2/surat/1",   
//       "https://equran.id/api/v2/surat/112"  
//     ];
//     const responses = await Promise.all(urls.map(url => fetch(url)));
//     responses.forEach((response, i) => {
//       if (!response.ok) {
//         throw new Error(`Gagal mengambil data dari URL ke-${i + 1}`);
//       }
//     });

//     const jsonData = await Promise.all(responses.map(res => res.json()));
//     const surat1 = jsonData[0].data;
//     const surat2 = jsonData[1].data;

//     console.log("Surat pertama:", surat1.namaLatin);
//     console.log("Surat kedua  :", surat2.namaLatin);

//   } catch (err) {
//     console.error("Error tertangkap:", err.message);
//   } finally {
//     console.log("Proses selesai.");
//   }
// }

// getSurat();

//12.
// function ambilUser() {
//     return new Promise((resolve) =>{
//         setTimeout(() => resolve("user berhasil di ambil"), 1000)
//     })
// }
// function ambilPoduk() {
//     return new Promise((resolve) =>{
//         setTimeout(() => resolve("Produk berhasil di ambil"), 3000)
//     })
// }

// async function jalankan() {
//     let balap = await Promise.race([ambilUser(), ambilPoduk()])
//     console.log("pemenangnya", balap)
// }

// jalankan()

//13.
// function ambilUser() {
//     return new Promise((resolve) =>{
//         setTimeout(() => resolve("data 1"), 1001)
//     })
// }
// function ambilPoduk() {
//     return new Promise((resolve) =>{
//         setTimeout(() => resolve("data 2"), 1001)
//     })
// }

// async function jalankan() {
//     try {
//         let balap = await Promise.race([ambilUser(), ambilPoduk()])
//         console.log("pemenangnya", balap)
//     } catch (e) {
//         console.error("eror", e)
//     }
// }

// jalankan()

//14.
// async function getAllData() {
//   try {
//     const urls = [
//       "https://equran.id/api/v2/surat",            
//       "https://api.myquran.com/v2/husna/semua",    
//       "https://api.myquran.com/v2/hadits/arbain/semua" 
//     ];

//     const responses = await Promise.all(urls.map(url => fetch(url)));
//     responses.forEach((response, i) => {
//       if (!response.ok) {
//         throw new Error(`Gagal mengambil data dari URL ke-${i + 1}`);
//       }
//     });

//     const jsonData = await Promise.all(responses.map(res => res.json()));
//     const surat = jsonData[0].data;  
//     const husna = jsonData[1].data;  
//     const arbain = jsonData[2].data; 

//     console.log("Jumlah Surat       :", surat.length);
//     console.log("Jumlah Asmaul Husna:", husna.length);
//     console.log("Jumlah Hadits      :", arbain.length);

//   } catch (err) {
//     console.error("Error tertangkap:", err.message);
//   } finally {
//     console.log("Proses selesai.");
//   }
// }

// getAllData();

//15.
// async function fetchSurat(id) {
//   const url = `https://equran.id/api/v2/surat/${id}`;
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error("Gagal mengambil data surat dari API");
//   }
//   const result = await response.json();
//   return result.data;
// }

// async function main() {
//   try {
//     const id = 1; 

//     const surat = await fetchSurat(id);
//     console.log("Nama Surat:", surat.namaLatin);
//     console.log("Jumlah Ayat:", surat.jumlahAyat);
//   } catch (err) {
//     console.error("Error tertangkap:", err.message);
//   } finally {
//     console.log("Proses selesai.");
//   }
// }

// main();
