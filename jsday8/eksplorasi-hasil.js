// ===== soal 1 =====

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// console.log(nama)

// ====== soal 2 ======

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// nama.push(kahfi)
// console.log(nama)

// ====== soal 3 ======

//  let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
//  nama.pop()
//  console.log(nama)

// ====== soal 4 ======

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// let namanama = nama.shift(kahfi)
// console.log(nama)

// ====== soal 5 ======

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// let namanama = nama.unshift(kahfi)
// console.log(nama)

// ====== soal 6 ====== 

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// let bagian = nama.slice(2,4)
// console.log(bagian)

// ====== soal 7 ======

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']  
// let bagian = nama.splice(2,4)
// console.log(bagian)  

// ====== soal 8 ======

// let nomor = [20, 30, 40, 50, 60, 70, 80, 90, 100 ]
// let dikali3 = nomor.map(function (i) {
//     return i * 3
// })
// console.log(dikali3)

// ====== soal 9 ======

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// nama.forEach(function (i, index) {
//     console.log(`${index + 1}. ${i}`)
// })

// ====== soal 10 ======

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// let posisi = nama.indexOf('budi')
// console.log(posisi)

// ====== soal 11 ======   

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// let cek = nama.includes('budi')
// console.log(cek)

// ====== soal 12 ======    

// let nama1 = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// let nama2 = ['irgi', 'jidan', 'tsaqif', 'farid', 'rizki']
// let gabung = nama1.concat(nama2)
// console.log(gabung)

// ====== soal 13 ======    

// let nama = []
// nama.push = ['kahfi',]
// nama.push = ['irgi',]
// let gabung = nama.join()
// console.log(gabung)

// ====== soal 14 ======  

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// nama.reverse()
// console.log(nama)

// ====== soal 15 ======  

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// nama.sort()
// console.log(nama)

// ====== soal 16 ======  

// let nilai = [73, 43, 54, 76, 89];
// let filternilai = nilai.filter(function(nilai) {
//     return nilai >= 60;
// });
// console.log(filternilai); 

// ====== soal 17 ======

// let nilai = [73, 43, 54, 76, 89];
// let total = nilai.reduce(function(sum, nilai) {
//     return sum + nilai;
// }, 0);
// console.log(total);

// ====== soal 18 ======

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// let cari = nama.find(function(item) {
//     return item.length > 5;
// });
// console.log(cari); 

// ====== soal 19 ======

// let belanja = [10000, 20000, 30000, 40000, 50000];
// let harga = belanja.some(function(skor) {
//     return skor >= 20000;
// });
// console.log(harga);

// ====== soal 20 ======

// let belanja = [10000, 20000, 30000, 40000, 50000]
// let harga1 = belanja.every(function(skor) {
//     return skor = 20000; 
// });
// console.log(harga1);

// ====== soal 21 ======

// let nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq'];
// let indexnama = nama.findIndex(function(nama) {
//     return nama === "xena";
// });
// console.log(indexnama); 

// ====== soal 22 ======

// let nama = [['kahfi', 'ucup'], ['budi', 'xena'], ['thariq']]
// let bagian = nama.flat()
// console.log(bagian)

// ====== soal 23 ======

// let nilai = [65, 40, 56, 54, 76, 89]
// let kali = nilai.flatMap(function (item) {
//     return item * 3
// })
// console.log(kali)

// ====== soal 24 ======

// let  nama = ['kahfi', 'ucup', 'budi', 'xena', 'thariq']
// let  nama2 = ['irgi', 'jidan', 'tsaqif', 'farid', 'rizki']
// let gabung = [...nama, ...nama2]
// console.log(gabung)

// ====== soal 25 ======

// let nilai = [65, 40, 56, 54, 76, 89]
// let [x, y, z] = nilai
// console.log(x)
// console.log(y)
// console.log(z)

// ====== study case ======

// let penjualan = [15000, 20000, 30000, 40000, 50000]
// let total = penjualan.reduce(function(sum, penjualan) {
//     return sum + penjualan;
// }, 0);
// let diskon = penjualan.map(function(harga) {
//     if (harga >= 30000) {
//         return harga - (harga * 0.1);
//     } else {
//         return harga;
//     }
// });
// console.log(diskon)



