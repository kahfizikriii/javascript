//1.
const data = new Promise((resolve, reject) => {
    setTimeout(() => {
  resolve("operasi berhasil");
    }, 2000);
  });
  
  data
    .then(data => console.log(data))

2.
const janji = new Promise((resolve, reject) => {
    setTimeout(() => {
      let sukses = true;
  
      if (sukses === true) {
        resolve("operasi berhasil");
      } else {
        reject("operasi gagal");
      }
    }, 2000);
  });
  
  janji
  .then(janji => console.log(janji))
    .catch(janji => console.log(janji))

.3
Promise.resolve(5)
    .then(i=> i*2)
    .then(i=> i+10)
    .then(i=> i*2)
    .then(i=> console.log(i))

4.
 fetch("https://equran.id/api/v2/surat/114")
 .then(data => {
    console.log("quran berhasil di ambil")
    console.log(data)
 })


5.
 fetch("https://equran.id/api/v2/surat/114")
 .then(response => {
    if(!response.ok) {
        console.error("API gagal di ambil ")
    }
    return response.json()
 })
 .then(data => {
    console.log("quran berhasil di ambil")
    console.log(data)
 })
 .catch(e => console.error("error", e.message))


6.
 fetch("https://equran.id/api/v2/surat/114")
 .then(response => {
    if(!response.ok) {
        console.error("API gagal di ambil ")
    }
    return response.json()
 })
 .then(data => {
    console.log("quran berhasil di ambil")
    console.log(data)
 })
 .catch(e => console.error("error", e.message))
 .finally(() => console.log("proses selesai"))

7.
const asmaulhusna = fetch("https://api.myquran.com/v2/husna/semua");
const arbain = fetch("https://api.myquran.com/v2/hadits/arbain/semua");

Promise.race([asmaulhusna, arbain])
  .then(response => {
    if (!response.ok) {
      throw new Error("API gagal diambil: " + response.status);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(" API yang lebih cepat merespons:", data);
  })
  .catch(error => {
    console.error(" Terjadi error:", error.message);
  });

  8.
const quran = fetch("https://api.myquran.com/v2/quran/surat/semua");
const asmaulhusna2 = fetch("https://api.myquran.com/v2/husna/semua");
const apiSalah = fetch("https://api.myquran.com/v2/husna/salah"); 

Promise.allSettled([quran, asmaulhusna2, apiSalah])
  .then(results => {
    results.forEach((result, index) => {
      console.log(API ke-${index + 1}:, result.status);
      if (result.status === "fulfilled") {
        console.log(" Sukses:", result.value.url);
      } else {
        console.log(" Gagal:", result.reason);
      }
    });
  });

9.
 const arbain = fetch("https://api.myquran.com/v2/hadits/arbain/semua")
const quran = fetch("https://api.myquran.com/v2/quran/surat/semua")
const asmaulhusna = fetch ("https://api.myquran.com/v2/husna/semua")
Promise.all([quran, asmaulhusna, arbain])
.then(Responses => Promise.all(Responses.map(r => r.json())))
.then(data => {
    console.log("semua berhasil di ambil")
    console.dir(data, {depth: null})
})
.catch(e => {
    console.log("ada api yang gagal di ambil", e)
 })


10.
const apikey = fetch("https://equran.id/api/v2/surat/1")//Memanggil API untuk mengambil data surat 1. fetch mengembalikan Promise.
    .then(response => {//Menangani response dari fetch
        if (!response.ok) throw new Error("API gagal diambil")//Jika HTTP status bukan 200–299, lempar error supaya Promise rejected.
        return response.json() // mengembalikan respon jadi json
    })
const time = new Promise((_,reject) => { //Membuat Promise baru yang hanya reject setelah delay tertentu. _ berarti kita tidak menggunakan resolve.
    setTimeout(() => { //Setelah 2 detik, Promise ini akan rejected dengan pesan error “timeout api terlalu lama”.
        reject(new Error("timeout api terlalu lama"));
    }, 5000) // 
})

Promise.race([apikey, time]) // melombakan time dan apikey
    .then(data => {
       console.log(JSON.stringify(data, null, 2));
         }) // format rapi   
    .catch(error => console.log(error.message))
    .finally(() => console.log("proses selesai"));