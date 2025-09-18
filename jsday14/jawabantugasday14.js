//1.
const siswa = {nama : "kahfi", umur : 20, jurusan : "IT"}
const stringify = JSON.stringify(siswa)
console.log(stringify)

//2.
const data = {produk: "laptop", harga: 7500000, stok: 10}
console.log(data)

//3.
const biodata = {
    nama : "handphone", jumlah : 20, harga : 1000000,
    nama : "laptop", jumlah : 10, harga : 7500000,
}

const string = JSON.stringify(biodata)
console.log(string)

//4.
const json = `{
    "nama" : "budi", usia : 21, status : mahasiswa}`

const parse = JSON.parse(json)
console.log(parse.nama)
console.log(parse.usia)
console.log(parse.status)

//5.
const jsonString = '["apel","jeruk","pisang"]';
const buahh = JSON.parse(jsonString);
buahh.forEach((buah, index) => {
  console.log(`${index + 1}. ${buah}`);
});
 
//6.
const kendaraan = `{
    "merk": "honda",
    "model": "civic",
    "tahun": 2022
}`
const mobil = JSON.parse(kendaraan);

for (let key in mobil) {
  console.log(`${key}: ${mobil[key]}`);}

//7.
function sapaUser(nama, callback) {
    console.log("hai " + nama)
    callback()
}

function setelahsapa(){
    console.log("Selamat Belajar JSON!");
}

sapaUser("Kahfi", setelahsapa);

//8.
function hitungluas (panjang, lebar, callback) {
    const luas = panjang * lebar;
    console.log("Hasil luasnya adalah: " + luas);
    callback(luas);
}

function setelahHitung(hasil) {
    console.log("Perhitungan selesai dengan hasil " + hasil);
}

hitungluas(50, 60, setelahHitung);

//9. 
function prosesdata (data, callback) {
    if(Array.isArray(data)) {
        const jumlah = data.length;
        console.log("Jumlah data: " + jumlah);
        callback(null, data); 
    }
    else {
        const error = "Data bukan array";
        console.log(error);
        callback(error, null); 
    }
}

prosesdata([1, 2, 3, 4, 5], (err, hasil) => {
    if (err) {
        console.error("Terjadi kesalahan:", err);
        return;
    }
    console.log("Callback berhasil dieksekusi dengan data:", hasil);
});

//10.
sapaUser("Kahfi", function() {
    console.log("Sampai Jumpa!");
});

11.
function kirimpesan(pesan, callback){
callback(pesan);
}

kirimpesan("jangan lupa besok",function(pesan){
    console.log(pesan.toUpperCase());
})

12.
console.log("ini pertama");

setTimeout(function(){
    console.log("proses selesai setelah 2 detik");
},2000);

console.log("ini ketiga");

//13.
function ambildata(callback){
    console.log("mengambil data");
    setTimeout(function(){
        const data = {id: 1, nama: "laptop"}
        console.log(data)
        callback()
    }, 3000)
}

ambildata(function(){
    console.log("data diterima")
})




