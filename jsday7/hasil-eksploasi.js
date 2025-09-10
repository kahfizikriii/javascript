
// ===== soal 1 =====

// let teman = ['irgi', 'kahfi', 'xena', 'ucup', 'thariq']
// console.log(`nama pertama ${teman[0]}, nama terakhir ${teman[4]}`)
// console.log(teman.length)

// ===== soal 2 =====

// let hobi = []
// hobi.push(`basket`)
// hobi.push(`fotografi`)
// hobi.push(`videography`)
// console.table(hobi)

// ===== soal 3 =====

// let pelajaran = ['mtk', 'penjas', 'pkn', 'ips']
// pelajaran.pop()
// console.table(pelajaran)

// ===== soal 4 =====

// let angka = [100, 90, 80, 70, 60]
// for (let i = 0; i < angka.length; i++) {
//     console.log("nilai adalah" + (i+3) + angka[i]);
// }

// ===== soal 5 =====

// let kota = ['bogor', 'jakarta', 'bandung']
// let posisi = kota.indexOf('bogor')
// console.log(posisi);

// ===== soal 6 =====

// let namafilm = ['sore', 'komang', 'spiderman']
// namafilm[1] = 'marvel'  
// console.log(namafilm);

//===== soal 7 ======

// let olahraga = ['basket', 'sepakbola', 'renang']
// olahraga.unshift('futsal')
// console.log(olahraga)

// ===== soal 8 =====

// let bulan = ['januari', 'februari', 'maret', 'april', 'mei']
// let bulanpertama = bulan.shift()
// console.log(bulanpertama);
// console.log(bulan);

// ===== soal 9 ======

// let makananringan = ['kripik', 'bengbeng', 'oreo']
// let makananberat = ['nasi', 'ayam', 'daging']
// let makanan = makananringan.concat(makananberat)
// console.log(makanan);

// ===== soal 10 =====

// let angka = [1, 2, 3, 4, 5]
// angka.reverse()
// console.log(angka);

// ====== soal 11 ======

// let nama = ['irgi', 'kahfi', 'xena', 'ucup', 'thariq']
// nama.sort()
// console.log(nama);

// ====== soal 12 ======

// let matapelajaran = ['mtk', 'penjas', 'pkn', 'ips']
// let cek = matapelajaran.includes('mtk')
// console.log(cek);

// ====== soal 13 ======

// let week = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
// let hari = week.slice(0, 2)
// console.log(hari);

// ====== soal 14 ======

// let negara = ['indonesia', 'swiss', 'belgia', 'jerman', 'jepang']
// negara.forEach(function (item, index) {
//     console.log(`negara ke-${index+1} adalah ${item}`);
// })

// ====== soal 15 ======

// let nomor = [88, 89, 66, 75]
// let dikalikan = nomor.map(function (item) {
//     return item * 2
// })
// console.log(dikalikan);

// ====== soal 16 ======

// let nilai = []
// for (let i = 0; i <= 100; i++) {
//     nilai.push(i)
// }
// let lulus = nilai.filter(function (ketentuan) {
//     return nilai > 70
// })  
// console.log(nilai);
// console.log(lulus);

// ====== soal 17 ======

// let penjualan = [5000, 10000,15000, 20000, 25000]
// let totalpenjualan = penjualan.reduce(function (a, b) {
//     return a + b
// })
// console.log(totalpenjualan);

// ====== soal 18 ======

// let nama = ['irgi', 'kahfi', 'xena', 'ucup', 'thariq']
// let cari = nama.find(function (item) {
//     return item === 'kahfi'
// })
// console.log(cari);

// ====== soal 19 ======

// let tinggi = [180, 190,160, 170, 150]
// let tinggibadan = tinggi.some(function (item) {
//     return item > 170
// })
// let tinggibadan2 = tinggi.every(function (item) {
//     return item > 170
// })

// console.log(tinggibadan);
// console.log(tinggibadan2);

// ======= soal 20 ======

// let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let hasil = angka
// .filter(function (item) {
//     return item % 2 === 0
// })
// .map(function (item) {
//     return item * 2
// })
// .reduce(function (a, b) {
//     return a + b
// })

// console.log(hasil);

