
// ===== Soal 1 =====

// const nasigudeg = 8000
// const ayamgoreng = 12000
// const esteh = 3000

// let penjualangudeg = 9
// let penjualanayam = 12
// let penjualanesteh = 20

// let total = (nasigudeg * penjualangudeg) + (ayamgoreng * penjualanayam) + (esteh * penjualanesteh)
// console.log("total pendapatan hari ini" + " " + total)

// ===== Soal 2 =====

// const nasigudeg = 8000
// const ayamgoreng = 12000
// const esteh = 3000

// let penjualangudeg = 9
// let penjualanayam = 12
// let penjualanesteh = 20

// let total = (nasigudeg * penjualangudeg) + (ayamgoreng * penjualanayam) + (esteh * penjualanesteh)

// if (total >= 250000) {
//     let diskon = total * 0.1
//     let bayar = total - diskon
//     console.log("total setelah diskon adalah" + " " + bayar);
// }
// else(total < 250000)
//     console.log("total sebelum diskon adalah" + " " + total);

// ====== soal 3 =====

// let penjualangudeg = 9
// let penjualanayam = 12
// let penjualanesteh = 20

// if (penjualanesteh > penjualanayam && penjualanesteh > penjualangudeg) {
// }
//     else if (penjualanayam > penjualanesteh && penjualanayam > penjualangudeg) {
//     }
//         else {
//             console.log(terjualgudeg);
//         }
// console.log("menu paling laris adalah" + " " + penjualanesteh);

//===== soal 4 =====

// const nasigudeg = 8000
// const ayamgoreng = 12000
// const esteh = 3000

// let penjualangudeg = 9
// let penjualanayam = 12
// let penjualanesteh = 20

// let total = (nasigudeg * penjualangudeg) + (ayamgoreng * penjualanayam) + (esteh * penjualanesteh)

// let biasa = 0.05
// let member = 0.1
// let VIP = 0.15

// console.log("total diskon biasa adalah" + " " + total*biasa);
// console.log("total diskon member adalah" + " " + total*member);
// console.log("total diskon VIP adalah" + " " + total*VIP);

//===== soal 5 =====

// let kemarin = 150000
// let lusa = 200000
// let tigaharilalu = 175000
// let empatharilalu = 180000
// let limaharilalu = 165000
// let enamharilalu = 190000
// let tujuhharilalu = 145000

// let total = kemarin + lusa + tigaharilalu + empatharilalu + limaharilalu + enamharilalu + tujuhharilalu

// let ratarata = total/7

// console.log("rata rata penjualan selama seminggu adalah" + " " + ratarata);

//===== soal 6 =====

// let barang = [
//   { nama: "Kaos", stokAwal: 50, harga: 75000 },
//   { nama: "Celana", stokAwal: 30, harga: 150000 },
//   { nama: "Jaket", stokAwal: 15, harga: 200000 }
// ];

// let terjual = {
//   Kaos: 10,
//   Celana: 5,
//   Jaket: 2
// };

// barang.forEach(item => {
//   let jumlahTerjual = terjual[item.nama] || 0; 
//   let stokSisa = item.stokAwal - jumlahTerjual;
//   let nilaiStok = stokSisa * item.harga;

//   console.log(`${item.nama}: ${stokSisa} pcs (Rp ${nilaiStok.toLocaleString()})`);
// });

//====== soal 7 =====

// let pelanggan = [
//     { nama: "irgi", poin: 0},
//     { nama: "kahfi", poin: 0}
// ]
// function tambahpoin(nama, belanja) {
//     let poin = belanja / 10000;
//     pelanggan [nama] += poin;
//     console.log(`${nama} mendapatkan poin ${poin}`);
// }

// tambahpoin("irgi", 50000);
// tambahpoin("kahfi", 20000);


//====== soal 8 =====

// let barang = [
//   { produk: "Kaos", stok: 40, harga: 75000 },
//   { produk: "Celana", stok: 8, harga: 150000 },
//   { produk: "Jaket", stok: 5, harga: 200000 }
// ];

// barang.forEach(item =>  {
//   let bonus = 0
//   if (item.stok <= 10) {
//     bonus = item.harga * 0.05
//     console.log("dapat bonus" + " " + bonus);
    
//   } else (item.stok > 10)
//   console.log("tidak dapat bonus" + " " + item.produk)
// });

//===== soal 9 =====

// function barang(stok) {
//      if (stok <= 20) {
//    console.warn("stok kurang dari 20")
// } 
// else {
    
//     console.log("stok lebih dari 20");
// }
// }
// barang(15)

//===== soal 10 =====

// let pelanggan = [
//     { nama: "irgi", poin: 70},
//     { nama: "kahfi", poin: 355},
//     { nama: "ucup", poin: 700}
// ]

// pelanggan.forEach(item => {
//     let poin = item.poin
//      if (poin > 500) {
//         console.log(poin + " " + item.nama + " gold")
//     }
//     else if (poin > 100 ){
//         console.log(poin + " " + item.nama + " silver")
//     }
//     else {
//         console.log(poin + " " + item.nama + " bronze")
//     }
// } ) 

//===== soal 11 ======

// let nilai = [
//      70, 89, 90, 68, 70, 87, 90, 62, 70, 84, 90, 65, 76, 80, 91, 60, 73, 80, 91, 60, 77, 82, 90, 50, 60,
// ]

// let total = 0
//  nilai.forEach(item => {
//     total += item
// })

// let ratarata = total / nilai.length
// console.log(ratarata);

//===== soal 12 ======

// let siswa = [
//     { nama: "irgi", nilai: 75},
//     { nama: "kahfi", nilai: 68},
//     { nama: "ucup", nilai: 90},
//     { nama: "xena", nilai: 50}
// ]

// siswa.forEach(item => {
//     let nilai = item.nilai
//      if (nilai  > 85 && nilai < 100){
//         console.log(nilai + " " + item.nama +  " " + "a")
//     }
//     else if (nilai > 70 && nilai < 84 ){
//         console.log(nilai + " " + item.nama + " " + "b")
//     }
//     else if (nilai > 60 && nilai < 69) {
//         console.log(nilai + " " + item.nama + " " + "c")
//     }
//     else {
//         console.log(nilai + " " + item.nama + " " + "d")
//     }
// } ) 

//===== soal 13 ======

// let siswa = [
//     { nama: "irgi", nilai: 75},
//     { nama: "kahfi", nilai: 68},
//     { nama: "ucup", nilai: 90},
//     { nama: "xena", nilai: 50}
// ]

// function carinama(namasiswa) {
//     let hasil = siswa.find(s => s.nama.toLowerCase() === namasiswa.toLowerCase());
//     console.log(hasil);
// }

// carinama("irgi")

//===== soal 14 ======

// let nilai = [
//      70, 89, 90, 68, 70, 87, 90, 62, 70, 84, 90, 65, 76, 80, 91, 60, 73, 80, 91, 60, 77, 82, 90, 50, 60,
// ]

// let total = 0
//  nilai.forEach(item => {
//     total += item
// })

// let ratarata = total / nilai.length

// nilai.forEach(item => {
//     let nilai = item.nilai
//      if (ratarata  > 80){
//         console.log("mendapatkan reward")
//     }
//     else {
//         console.log("belum mendaptkan reward")
     
//     }
// } ) 

//===== soal 15 ======

// let siswa = [
//     { nama: "irgi", nilai: 75},
//     { nama: "kahfi", nilai: 68},
//     { nama: "ucup", nilai: 90},
//     { nama: "xena", nilai: 50}
// ]

// function buatRanking(dataSiswa) {
//   let ranking = dataSiswa.sort((a, b) => b.nilai - a.nilai);
//   console.log("ranking kelas:");
//   ranking.forEach((s, index) => {
//     console.log(`${index + 1}. ${s.nama} - ${s.nilai}`);
//   });
// }

// buatRanking(siswa);

//===== soal 16 =====

// let services = [
//   { jenis: "Ringan", harga: 50000, waktu: 2 },   
//   { jenis: "Sedang", harga: 100000, waktu: 4 },
//   { jenis: "Berat", harga: 200000, waktu: 8 }  
// ];

// function hitungService(jumlah) {
//   let totalPendapatan = 0;
//   let totalWaktu = 0;

//   services.forEach((service, index) => {
//     let banyak = jumlah[index]; 
//     let pendapatan = banyak * service.harga;
//     let waktu = banyak * service.waktu;

//     console.log(
//       `${service.jenis}: ${banyak} ${pendapatan} ${waktu} jam`
//     );

//     totalPendapatan += pendapatan;
//     totalWaktu += waktu;
//   });

//   console.log("Total Pendapatan: Rp" + totalPendapatan);
//   console.log("Total Waktu: " + totalWaktu + " jam");
// }

// hitungService([5, 3, 2]);

//===== soal 17 ======

// let services = [
//   { jenis: "Ringan", waktu: 2 },   
//   { jenis: "Sedang", waktu: 4 },   
//   { jenis: "Berat", waktu: 8 }     
// ];

// function cekSelesai(jumlah) {
//   let totalWaktu = 0;
//   const kapasitasHarian = 8;

//   services.forEach((service, index) => {
//     let banyak = jumlah[index]; 
//     let waktu = banyak * service.waktu;

//     console.log(`${service.jenis}: ${banyak} motor ${waktu} jam`);
//     totalWaktu += waktu;
//   });

//   console.log("Total Waktu: " + totalWaktu + " jam");

//   if (totalWaktu <= kapasitasHarian) {
//     console.log(" Semua motor bisa selesai hari ini!");
//   } else {
//     console.log(" Tidak cukup waktu, sebagian motor lanjut besok.");
//   }
// }

// cekSelesai([2, 1, 1]);

//====== soal 18 ======

// let antrian = [];

// function tambahMotor(nama) {
//   let nomor = antrian.length + 1; 
//   antrian.push({ nomor, nama });
//   console.log(`Motor ${nama} masuk antrian dengan nomor ${nomor}`);
// }

// function panggilMotor() {
//   if (antrian.length === 0) {
//     console.log("Antrian kosong, tidak ada motor.");
//   } else {
//     let motor = antrian.shift(); 
//     console.log(`Motor nomor ${motor.nomor} (${motor.nama}) dipanggil untuk service.`);
//   }
// }

// function lihatantrian() {
//   if (antrian.length === 0) {
//     console.log("tidak ada motor dalam antrian.");
//   } else {
//     console.log("antrian saat ini:");
//     antrian.foreach(m => console.log(`${m.nomor}. ${m.nama}`));
//   }
// }

// tambahMotor("beat");
// tambahMotor("vario");
// tambahMotor("nmax");

// lihatAntrian();

// panggilMotor();  
// lihatAntrian();

//====== soal 19 ======

// let garansi = {
//   "Ringan": 7, 
//   "Sedang": 14,  
//   "Berat": 30    
// };

// function hitungGaransi(namaMotor, jenisService, tanggalService) {
//   let hariGaransi = garansi[jenisService];

//   if (!hariGaransi) {
//     console.log("Jenis service tidak dikenal.");
//     return;
//   }

//   let tglService = new Date(tanggalService);
//   let tglBerakhir = new Date(tglService);
//   tglBerakhir.setDate(tglService.getDate() + hariGaransi);

//   console.log(`Motor ${namaMotor}`);
//   console.log(`Service: ${jenisService}`);
//   console.log(`Tanggal Service: ${tglService.toDateString()}`);
//   console.log(`Garansi berakhir: ${tglBerakhir.toDateString()}`);
// }

// hitungGaransi("Beat", "Sedang", "2025-09-08");
// hitungGaransi("Nmax", "Berat", "2025-09-08");
// hitungGaransi("Vario", "Ringan", "2025-09-08");

//====== soal 20 ======

// let services = [
//   { jenis: "Ringan", harga: 50000, komisi: 0.10 },  
//   { jenis: "Sedang", harga: 100000, komisi: 0.15 }, 
//   { jenis: "Berat", harga: 200000, komisi: 0.20 }   
// ];

// function hitungKomisi(jumlah) {
//   let totalKomisi = 0;

//   services.forEach((service, index) => {
//     let banyak = jumlah[index]; 
//     let komisi = banyak * service.harga * service.komisi;

//     console.log(
//       `${service.jenis}: ${banyak} motor → Komisi Rp${komisi}`
//     );

//     totalKomisi += komisi;
//   });

//   console.log(" Total Komisi Mekanik: Rp" + totalKomisi);
// }

// hitungKomisi([5, 3, 2]);
