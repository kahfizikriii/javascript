//=================================

// level 1 : catatan menampilkan di console
console.log("Halo JavaScirpt")

//================================

// level 1 : catatan menampilkan hasil 100 dikurang 50 
console.log(100-50);
// level 1 : catatan menamilkan hasil 10 dikali 5
console.log(10*5);

//================================

// level 1 : catatan untuk menampilkan nama lengkap
console.log("Muhammad Al Kahfi Zikri")
// level 1 : catatan untuk menampilkan umur
console.log("20 tahun")

//================================

// level 1 : catatan untuk menampilkan pesan pop up
alert ("selamat datang di website kami")
alert (20+15)

//================================

//level 1 : catatan pengisian untuk username pada pop up
prompt ("tolong isi buah favorit anda")
prompt ("berasal darimana anda?")

//================================

// level 1 : catatan untuk menampilkan pesan konfirmasi
alert ("anda berasal dari kota bogor")

//================================

// level 1 : catatan menyimpan data dan menampilkan di html
document.getElementById("pesan").innerHTML = "Ini Adalah Paragraf JavaScript";
document.getElementById("judul").innerHTML = "Tugas Selesai!";

//================================

// level 1 : menampilkan hasil hitungan 
document.getElementById("hasil-hitung").innerHTML = (20/5)+10;

//================================

// level 2 : menampilkan nama dalam console
let nama = "Muhammad Al Kahfi Zikri";
console.log("Halo" + nama);

//================================

// level 2 : 
let hargabarang1 = (5000) 
let hargabarang2 = (10000)
console.log(hargabarang1 + hargabarang2);

//================================

// level 2 : menyimpan angak dan mengkalikan angka yg sudah di masukkan user
let angka = prompt ("masukkan angka")
console.log(angka *2);

//================================

// level 2 : memberi info kepada user dari apa yg sudah di isi
let kata = prompt ("masukkan sebuah kata")
alert("anda memasukkan sebuah kata" + kata);

//================================

// level 2 : menconfirm pengguna setuju atau tidak
confirm("apakah anda setuju dengan kebijakan kami?")
console.log(confirm);

//================================

// level 2 : menampilkan dan menyimpan informasi pengguna
let nama1 = prompt ("masukkan nama anda")
console.info("informasi pengguna" + nama1)

//================================

// level 2 : menampilkan hasil kali dari kedua variabel
let angka1 = prompt ("masukkan angka")
let angka2 = prompt ("masukkan angka")
document.getElementById(hasil-kali).innerHTML = (angka1 * angka2);

//================================

//level 2 : menampilkan warning ke pengguna atau user
console.warn("Peringatan! Website ini sedang dalam perbaikan")

//=============================

// level 2 : membuat peringatan error di console 
function show(){
    console.error("Terjadi kesalahan pada data!")
}

//=============================

// level 2 : membuat 2 variable kemudian di gabungkan jadi satu
let huruf1 = "selamat"
let huruf2 = "datang"
console.log(huruf1 + " " + huruf2)

//=============================

 // level 3 : mengkalikan angka 
let pertanyaan = prompt ("masukkan angka")
  if (pertanyaan % 2 === 0) {
    console.log (pertanyaan + "adalah angka genap")    
  }
  else {                                            
    console.log (pertanyaan + "adalah angka ganjil")}
//=============================

// level 3 : memberikan pernyataan 
let nilai = prompt ("masukkan nilai")
  if (nilai < 70) {
    console.warn ("nilai anda jelek " + nilai)    
  }
  else {                                            
    console.info ("nilai anda bagus " + nilai)}

//=============================

// level 3 : membuat pertanyaan dan memberikan pernyataan 
let pencipta = prompt ("siapakah pencipta JavaScript?")
  if (pencipta == "Brendan Eich") {
    alert("Jawaban anda sudah benar")    
  }
  else {                                            
   alert("Jawaban anda salah, coba lagi!") }

//==============================

// level 3 : mengkelompokkan variable
console.group ("kelompok1")
console.log ("Muhammad Al Kahfi Zikri")
console.log ("20 tahun")
console.log ("Pelajar")
console.groupEnd("kelompok1")

//============================

//level 3 : membuat table di console agar tau perbandingan 
let nomor = prompt ("masukkan angka")
let nomor2 = prompt ("masukkan angka")
if (nomor > nomor2)
{console.table (nomor+"lebih besar"+ nomor2)}
else if (nomor < nomor2)
{console.table (nomor+"lebih kecil"+ nomor2)}
else
{console.table (nomor+"sama"+ nomor2)}

//============================

//level 3 : menampilkan pop up agar user tau informasi
let umur = prompt ("masukkan usia anda")
  if (umur >= 13 && umur <= 19) {
    alert("Anda berusia remaja")    
  }  else {                                            
   alert("Anda bukan Remaja")
 }

//=============================

//level 3 : menampilkan po up yang berbelanja di atas 100000
let total = prompt ("masukkan totoal belanja")
  if (total >= 100000) {
    alert("Selamat anda mendaptkan diskon 10%")    
  }  else {                                            
   alert("belanja lagi untuk mendapatkan diskon")
 }

//===========================

//level 3 : menampilkan konfirmasi untuk user
 let konfrim = confirm ("Apakah anda ingin melanjutkan?")
 if(konfrim){
 document.getElementById('status').innerHTML  = "Anda Melanjutkan";
 } else {
    document.getElementById('status').innerHTML  = "Anda membatalkan";
 }

//====================================

 // level 3 : menampilkan waktu di console
console.time("waktu perulangan"); 
for (let i = 1; i <= 1000; i++) {
}
console.timeEnd("waktu perulangan"); 

//====================================

//level 3 : untuk memberitahu atau info kelahiran dan
let identitas = prompt ("masukkan nama anda")
let tahunlahir = prompt ("masukkan tahun lahir anda")
tahunlahir = parseInt(tahunlahir)
let tahunsekarang = 2025
let umur = tahunsekarang - tahunlahir
console.log("Halo" + identitas + "Usia Anda" + umur + "tahun" )