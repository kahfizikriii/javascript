// function cekwaktu (jam){
// if (jam >= 4 && jam <= 5){
//     console.log("waktu solat adalah subuh")
// }    
// else if (jam >=12 && jam <= 13) {
//      console.log("waktu solat adalah dzuhur")
// }
// else if (jam >=15 && jam <= 16){
//     console.log("waktu solat adalah ashar")
// }
// else if (jam >=18 && jam <= 19){
//     console.log("waktu solat adalah maghrib")

// }
// else if (jam >=19 && jam <= 20){
//     console.log("waktu solat adalah isya")
// }
// }
// cekwaktu(5)

//====================

// function validasiusia (usia){
// if (usia >= 12 && usia <= 18){
//     console.log("layak masuk pondok")
// }    
// else {
//      console.log("tidak layak masuk pondok")
// }
// }
// validasiusia(1)

//====================

// function nilaiakhlak (nilai){
// if (nilai <= 0 || nilai >= 100){
//     return "masukkan nilai yang benar"
// }    
// else if (nilai >= 85) {
//      console.log("Akhlak Mulia")
// }
// else {
//     console.log ("perlu pembinaan lagi")
// }
// }
// nilaiakhlak(90)

//====================

// function perlengkapansolat (pakaikopiah,pakaisarung,bawasajadah) {
//     if (pakaikopiah == true && pakaisarung == true && bawasajadah == true) {
//        console.log("siap solat");
//     } else {
//         console.log("belum siap solat");
        
//     }
// }
// perlengkapansolat (true,true,true)
// perlengkapansolat (true,false,true)

//=====================

// function izinkeluarpondok (alasan) {
//     let alasanlower = alasan.toLowerCase ();
//     if (alasanlower == "sakit" || alasanlower == "keluarga" || alasanlower == "prestasi") {
//         console.log("maka di izinkan");
//     } else {
//         console.log("maka tidak di izinkan");
//     }
// }
// izinkeluarpondok("sakit")
// izinkeluarpondok("jalan")

//=======================

// function kegiatanharian(jadwal) {
//     switch (jadwal) {
//         case 1:
//             console.log("senin");
//             break;
//         case 2:
//             console.log("selasa");
//             break;
//         case 3:
//             console.log("rabu");
//             break;
//         case 4:
//             console.log("kamis");
//             break;
//         case 5:
//             console.log("jumat");
//             break;
//         case 6:
//             console.log("sabtu");
//             break;
//         case 7:
//             console.log("minggu");
            
//             break;
//         default: 
//             console.log("hari tidak ditemukan");
//     }
// }

// kegiatanharian(1)
// kegiatanharian(2)
// kegiatanharian(3)
// kegiatanharian(4)
// kegiatanharian(5)
// kegiatanharian(6)
// kegiatanharian(7)  

//=================


// function izinkeluarpondok (alasan) {
//     let alasanlower = alasan.toLowerCase ();
//     if (alasanlower == "sakit" || alasanlower == "keluarga" || alasanlower == "prestasi") {
//         console.log("maka di izinkan");
//     } else {
//         console.log("maka tidak di izinkan");
//     }
// }
// izinkeluarpondok("sakit")
// izinkeluarpondok("jalan")

//=======================

// function daftarmenu(menu) {
//     switch (menu) {
//         case 1:
//             console.log("1.nasi goreng");
//             break;
//         case 2:
//             console.log("2.nasi kucing");
//             break;
//         case 3:
//             console.log("3.nasi ayam");
//             break;
//         case 4:
//             console.log("4,teh manis");
//             break;
//         case 5:
//             console.log("5.aqua botol");
//             break;
//         default: 
//             console.log("menu tidak ditemukan");
//     }
// }

// daftarmenu(1)
// daftarmenu(2)
// daftarmenu(3)
// daftarmenu(4)
// daftarmenu(5)

//=================

// function kodekamar(kode) {
//     switch (kode) {
//         case 1:
//             console.log("asrama abu bakar");
//             break;
//         case 2:
//             console.log("asrama ali bin abi thalib");
//             break;
//         case 3:
//             console.log("asrama usman bin affan");
//             break;
//         case 4:
//             console.log("asrama umar bin khattab");
//             break;
//         default: 
//             console.log("asrama tidak ditemukan");
//     }
// }

// kodekamar(1)
// kodekamar(2)
// kodekamar(3)
// kodekamar(4)

//=================

// function kodekamar(kode) {
//     switch (kode) {
//         case 1:
//             console.log("asrama abu bakar");
//             break;
//         case 2:
//             console.log("asrama ali bin abi thalib");
//             break;
//         case 3:
//             console.log("asrama usman bin affan");
//             break;
//         case 4:
//             console.log("asrama umar bin khattab");
//             break;
//         default: 
//             console.log("asrama tidak ditemukan");
//     }
// }

// kodekamar(1)
// kodekamar(2)
// kodekamar(3)
// kodekamar(4)

//================

// function tingkatpelanggaran(pelanggaran) {
//     switch (pelanggaran) {
//         case 1:
//             console.log("1.nasihat");
//             break;
//         case 2:
//             console.log("2.hafalan taubat");
//             break;
//         case 3:
//             console.log("3.kerja");
//             break;
//         case 4:
//             console.log("4.skors");
//             break;
//         default: 
//             console.log("pelanggaran tidak ditemukan");
//     }
// }

// tingkatpelanggaran(1)
// tingkatpelanggaran(2)
// tingkatpelanggaran(3) 
// tingkatpelanggaran(4)

//=================

// function jabatanpengurus (jabatan) {
//     switch (jabatan) {
//         case 1:
//             console.log("Pimpinan pondok");
//             break;
//         case 2:
//             console.log("Sekretaris");
//             break;
//         case 3:
//             console.log("Bendahara");
//             break;
//         case 4:
//             console.log("Anggota");
//             break;
//         default: 
//             console.log("jabatan tidak ditemukan");
//     }
    
// }
// jabatanpengurus(1)
// jabatanpengurus(2)
// jabatanpengurus(3)
// jabatanpengurus(4)

//=================

// let santri = ["kahfi", "ucup", "irgi", "cena"];

// console.log("Daftar Santri Hadir:");
// for (let i = 0; i < santri.length; i++) {
//   console.log((i + 1) + ". " + santri[i]); 
// }

//================  

// let hafalan = [40, 43, 56, 35, 43, 66, 21]; 
// let total = 0;
// for (let i = 0; i < hafalan.length; i++) {
//   total += hafalan[i]; 
//   console.log("Hafalan ke-" + (i + 1) + ": " + hafalan[i] + " ayat");
// }
// console.log("Total Hafalan Mingguan: " + total + " ayat");

//================

// let jadwalShalat = [
//   { jam: "04:30", shalat: "subuh" },
//   { jam: "12:00", shalat: "zuhur" },
//   { jam: "15:30", shalat: "ashar" },
//   { jam: "18:00", shalat: "maghrib" },
//   { jam: "19:15", shalat: "isya" }
// ];
// console.log("Jadwal Shalat");
// for (let i = 0; i < jadwalShalat.length; i++) {
//   console.log(jadwalShalat[i].jam + " - " + jadwalShalat[i].shalat);
// }

//================

// // Input angka N (misalnya 5 kali)
// let N = 7;

// // Gunakan for loop untuk menampilkan motivasi
// for (let i = 0; i < N; i++) {
//   console.log("Semangat Santri!");
// }

//================

// // Input jumlah baris segitiga
// let N = 5;

// // Gunakan for loop untuk membuat pola
// for (let i = 1; i <= N; i++) {
//   let bintang = "";
//   for (let j = 1; j <= i; j++) {
//     bintang += "*";
//   }
//   console.log(bintang);
// }

//================

// // Harga emas per gram (misalnya 1 juta rupiah/gram)
// let hargaEmas = 1000000;

// // Nisab = 85 gram emas
// let nisab = 85 * hargaEmas;

// // Input harta santri
// let harta = 200000000; // contoh: 200 juta

// // Hitung zakat 2.5% jika harta ≥ nisab
// if (harta >= nisab) {
//   let zakat = harta * 0.025;
//   console.log("Jumlah zakat yang harus dibayar: Rp " + zakat);
// } else {
//   console.log("Belum wajib zakat");
// }

//================

// let datausername = "santri";
// let datapassword = "12345";

// let inputusername = "santri";
// let inputpassword = "12345";

// if (datapassword==inputpassword && datausername==inputusername) {
//    console.log("login berhasil");
// }
// else {
//    console.log("login gagal");
// }

//================

// let ayathafalan = 10
// let Akhlakhafalan = 80
// function kelulusan(ayathafalan, Akhlakhafalan) {

// if (ayathafalan >= 10 && Akhlakhafalan >= 80) {
//   return "lulus"
// }
// else {
//   return "tidak lulus"
// } 
// }
// console.log(kelulusan(90, 20))

//================

// let usia = 16;        
// let totalBelanja = 12000; 
// let diskon = 0;
// function belanja(total) {
// if (usia < 18 || totalBelanja > 1000000) {
//   diskon = totalBelanja * 0.10; 
//   console.log("Anda mendapat diskon Rp " + diskon);
//   console.log("Total bayar setelah diskon: Rp " + (totalBelanja - diskon));
// } else {
//   console.log("Tidak ada diskon");
//   console.log("Total bayar: Rp " + totalBelanja);
// }
// }
// belanja(16 , 12000)

//================

// // Function untuk validasi password
// function validasiPassword(password) {
//   // Syarat: panjang minimal 8
//   let panjang = password.length >= 8;
//   // Ada huruf kapital
//   let adaKapital = password.match(/[A-Z]/);
//   // Ada huruf kecil
//   let adaKecil = password.match(/[a-z]/);
//   // Ada angka
//   let adaAngka = password.match(/[0-9]/);

//   if (panjang && adaKapital && adaKecil && adaAngka) {
//     return "Password valid";
//   } else {
//     return "Password tidak valid";
//   }
// }

// // Contoh penggunaan
// console.log(validasiPassword("Santri123"));   //  valid
// console.log(validasiPassword("santri123"));   //  tidak valid (kurang kapital)
// console.log(validasiPassword("SANTRI123"));   //  tidak valid (kurang huruf kecil)
// console.log(validasiPassword("Santri"));      //  tidak valid (kurang angka & < 8)

//================

// // Function jadwal kajian rutin
// function jadwalKajian(ustadz, hari) {
//   return "Ngaji bersama " + ustadz + " setiap hari " + hari;
// }

// // Contoh penggunaan
// console.log(jadwalKajian("Ustadz Ahmad", "Senin"));
// console.log(jadwalKajian("Ustadz Budi", "Jumat"));

//================

// Function hitung luas dan keliling
// function hitungLapangan(panjang, lebar) {
//   let luas = panjang * lebar;
//   let keliling = 2 * (panjang + lebar);

//   // Kembalikan hasil dalam bentuk object
//   return {
//     luas: luas,
//     keliling: keliling
//   };
// }

// // Contoh penggunaan
// let hasil = hitungLapangan(50, 30);
// console.log(hasil);

//================

// // Fungsi konversi tahun Hijriyah ke Masehi
// function hijriyahKeMasehi(tahunHijriyah) {
//   let tahunMasehi = tahunHijriyah + 622; // rumus konversi
//   return tahunMasehi; // kembalikan hasil
// }

// // Contoh penggunaan
// console.log(hijriyahKeMasehi(1447)); // Output: 2069

//================

// Function untuk menghitung total hafalan
function hitungTotalHafalan(hafalan) {
  let total = 0;
  for (let i = 0; i < hafalan.length; i++) {
    total += hafalan[i];
  }
  return total;
}

// Contoh penggunaan
let hafalanSantri = [5, 4, 6, 3, 7, 4, 5]; // hafalan 7 hari
console.log("Total Hafalan: " + hitungTotalHafalan(hafalanSantri) + " ayat");
