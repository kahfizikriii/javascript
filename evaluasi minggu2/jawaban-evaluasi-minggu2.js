let nama = ['kahfi', 'irgi', 'toriq']
console.log(nama) //menampilkan data dalam array

let buah = ['apel', 'mangga', 'jeruk']
let hasil = buah.pop (mangga) //menghapus data mangga dalam array
console.log(hasil)

let siswa = ['xena', 'toriq', 'irgi', 'baja']
let sortir = siswa.sort () //mengurutkan data dalam array
console.log(sortir);

let santri = ['budi', 'agus', 'xena', 'ucup']
let hapus = santri.shift(agus) //menghapus data agus dalam array
console.log(hapus);

let santriA = ['irgi', 'ucup', 'rizkii', 'toriq']
let cari = santriA.indexof(rizkii) //mencari data rizkii dalam array
console.log(cari);

let A = ['rizki', 'toriq']
let B = ['irgi', 'xena']
let AB = A.concat(B) //menggabungkan data dalam array
console.log(AB);

let nomor = [15000, 20000, 30000, 40000, 50000]
let jumlah = nomor.reduce((a,b) => a+b)
console.log(jumlah) //menjumlahkan data dalam array

let data = ['kahfi', 'irgi', 'toriq']
let search = data.includes('kahfi') //mencari data kahfi dalam array
console.log(search)   

let angka = [1, 2, 3, 4, 5];
let bagian = angka.slice(1, 4); //memotong data dalam array
console.log(bagian); 

let dikali2 = angka.map(function(num) {
    return num * 2;
}); // mengkalikan angka di dalam array
console.log(dikali2); 

let skor = [85, 90, 78];
skor.forEach(function(nilai, index) {
    console.log(`Skor ${index + 1}: ${nilai}`); //menampilkan data dalam array
});

let umur = [15, 20, 17, 25];  
let dewasa = umur.filter(function(usia) {
    return usia >= 18; 
}); //memfilter data sesusai konidisi dalam array
console.log(dewasa); 

let semua = {...A, ...B} //menggabungkan data dalam array
console.log(semua);