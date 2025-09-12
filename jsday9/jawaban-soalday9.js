//====== Bagian 1 ======
let perpustakaan = {}
let daftarpengunjung = []
// obejek berfungsi dalam menyimpan data dalam kunci nilai atau bisa disebut dengan key contoh : {let siswa = nama : kahfi, irgi}
// arrray berfungsi untuk menyimpan data yg lebih terprinci dan terstruktur contoh : [kahfi,irgi]
// Bagian dari objek : disebut propeti berfungsi menyimpan data yg pasangan dengan dengan objek 
// bagian dari array : disebut elemen berfungsi menyimpan dalam satu wadah dan bisa juga kita sebut [kahfi] sebagai index1 [irgi]sebagai index2
// nama indentifier dalam object : disebut key berfugsi menamakan data  contoh nya {nama} seabagai key 
// isi dari indentifer tersebut :  disebut value berfugsi menamakan isi data contoh nya {kahfi} sebagai value

// ====== Bagian 2 ======
//5.
perpustakaan.nama = "perpustakaan kota"
perpustakaan.alamat = "Jl.pendidikan no. 123"
perpustakaan.tahunberdiri = 1995

//6.
daftarpengunjung.push ['kahfi', 'irgi', 'xena']


//7.
perpustakaan.nama = "perpustakaan digital kota"
perpustakaan['nama'] = 'perpustakaan digital kota'

//8.
daftarpengunjung [0] = "budi"

//9.
perpustakaan.jumlahbuku = 50000

//10.
daftarpengunjung.push ['sari dewi']

//11.
let kategoribuku = [['fiksi', 'non-fiksi'], ['sains', 'sejarah', 'biografi']]
perpustakaan.kategoribuku = kategoribuku

//12.
perpustakaan.fasilitasperpustakaan = {
    ruangbaca : {kapasitas : 100, lantai : 1},
    ruangkomputer : {kapasitas : 30, lantai : 2},
}

//13.
delete perpustakaan.tahunberdiri

//14.
// let obejek = {
//     keanggotaan : 
//     jeniskeanggotaan : "gold" //key biasa
//     jenis keanggotaan : "gold"  //key spasi
//     08123 : "anggota2023" //key angka
//     #anggota : "biaya-pendaftaran" //key simbol
// }

//15."
for (let a in perpustakaan) {
        if (typeof perpustakaan[a] == "object") {
        for (let b in perpustakaan[a]) {
        }}
        else {
        console.log(`ini isi dari perpustakaan ${a}`);}}
    

//16.
for (let aa in perpustakaan.fasilitasperpustakaan) {
        if (typeof perpustakaan.fasilitasperpustakaan[aa] == "object") {
        for (let bb in perpustakaan.fasilitasperpustakaan[aa]) {
        }}
        else {
        console.log(` ${aa}` );}}
    

//17.
cabangperpustakaan = perpustakaan
console.log(cabangperpustakaan)
cabangperpustakaan['nama'] = "perpustakaan digital cabang"
console.log(cabangperpustakaan)

//18.
let sistemPerpustakaan = {
  daftarBuku: [],

  tambahBuku: function(judul, pengarang) {
    let bukuBaru = { judul: judul, pengarang: pengarang };
    this.daftarBuku.push(bukuBaru);
    console.log(`${judul} ${pengarang}`);
  },

  cariBuku: function(judul) {
    let hasil = 
    this.daftarBuku.find(buku => buku.judul === judul);
    if (hasil) {
      console.log(`Buku ditemukan: "${hasil.judul} ${hasil.pengarang}`);
    } else {
      console.log(`Buku${judul} tidak ditemukan.`);
    }
  },

  hitungTotalBuku: function() {
    console.log(`Total buku: ${this.daftarBuku.length}`);
  },


  tampilkanInfo: function() {
    console.log('=== INFORMASI PERPUSTAKAAN DIGITAL===\n');
    console.log(`Nama: ${perpustakaan.nama}`);
    console.log(`Alamat: ${perpustakaan.alamat}\n`);
    console.log('=== FASILITAS TERSEDIA ===\n');
    console.log(`Ruang baca ${perpustakaan.fasilitasperpustakaan.ruangbaca.kapasitas}) orang di lantai ${perpustakaan.fasilitasperpustakaan.ruangbaca.lantai}`);
    console.log(`Ruang komputer ${perpustakaan.fasilitasperpustakaan.ruangkomputer.kapasitas} komputer di lantai ${perpustakaan.fasilitasperpustakaan.ruangkomputer.lantai}\n`);
    console.log('=== KOLEKSI BUKU TERBARU ===\n');
    this.daftarBuku.forEach(buku => {
      console.log(`${buku.judul} ${buku.pengarang}`);
    });
    console.log('=== PENGUNJUNG HARI INI ===\n')
    daftarpengunjung.forEach(pengunjung => {
      console.log(pengunjung);
    });
    console.log('====================================');
    console.log(`Status sistem: online`);
    console.log(`Terakhir diupdate: 11 september 2025`);
    console.log('====================================');
 }};

sistemPerpustakaan.tambahBuku("1. Laskar Pelangi", "Andrea Hirata");
sistemPerpustakaan.tambahBuku("2. Bumi Manusia", "Pramoedya Ananta Toer");
console.log(sistemPerpustakaan.cariBuku("Laskar Pelangi"));
console.log(sistemPerpustakaan.hitungTotalBuku());
sistemPerpustakaan.tampilkanInfo();




