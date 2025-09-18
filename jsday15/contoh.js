// 

// contoh misalnya pakai async
const ambilData = new Promise((resolve, reject) => {
    setTimeout(() => {
      let sukses = true;
  
      if (sukses) {
        resolve("Data berhasil diambil!");
      } else {
        reject("Gagal ambil data!");
      }
    }, 2000);
  });
  
  ambilData
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log("Proses selesai"));


//=========================================
//chaining

    const hitung = new Promise((resolve) => {
    setTimeout(() => resolve(5), 2000)
})

hitung
 .then(j => {
    console.log("langkah 1:", j)
    return j * 2
 })
 .then(j => {
    console.log("langkah 2:", j)
    return j + 10
 })
 .then(j => {
    console.log("langkah 3:", j)
    return j * 2
 })
 .then(j => {
    console.log("langkah 4", j)
 })
 .catch(e => console.log("error", e))
 .finally(() => console.log("berhasil hitung"))

//======================================
//fetch + api

 fetch("https://equran.id/api/v2/surat/114")
 .then(response => {
    if(!response.ok) {
        console.error("gagal ambil data quran")
    }
    return response.json()
 })
 .then(data => {
    console.log("quran berhasil di ambil")
    console.log(data)
 })
 .catch(e => console.error("error", e.message))
 .finally(() => console.log("proses selesai"))

 //=======================================
//promise all

 const surat = fetch("https://api.myquran.com/v2/quran/surat/semua")
const asmaulhusna = fetch ("https://api.myquran.com/v2/husna/semua")
const arbain = fetch ("https://api.myquran.com/v2/hadits/arbain/semua")

// promise all
Promise.all([surat, asmaulhusna, arbain])
 .then(responses => Promise.all(responses.map(r => r.json())))
 .then(data => {
    console.log("semua berhasil di ambil")
    console.dir(data, {depth: null})
 })
 .catch(e => {
    console.log("ada api yang gagal di ambil", e)
 })

 //=========================================
 