// function sayhelloName(nama, callback) {
//     console.log("Hai Nama kamu, " + nama)
//     callback()
// }

// function afterHello() {
//     console.log("Terima kasih sudah menyapa")
// }

// sayhelloName("Fikri", afterHello)

// anonim
// function sapaUser(nama, callback) {
//     console.log("hai " + nama)
//     callback()
// }

// sapaUser("Aisyah", function() {
//     console.log("sampai jumpa")
// })

// callback asynchronus
function sapaUser(nama, callback) {
    console.log("hai " + nama)
    callback()
}

sapaUser("Aisyah", function() {
    setTimeout(()=> {
        console.log("sampai jumpa")
    }, 10000)
})

console.log("ini nomor 3")

// contoh json
const contohJson = `{
    "nama" : "Ucup", 
    "Kelas" : 5 , 
    "Absen": true, 
    "Tempat_Tinggal" : [
        "ancol", "Jakarta"
    ],
    "Kesukaan" : {
        "makanan" : "Ayam Geprek",
        "Minuman" : "Extrajoss"
    },
    "Binatang_Kusukaan" : null
}`

// contoh stringify
const santri = { nama: "farid", umur: 40 }
const stringify = JSON.stringify(santri)

// pakai try catch buat handle error
try {
    const parsejson = JSON.parse(contohJson) // coba parsing JSON
    console.log("Nama dari JSON:", parsejson.nama)
    console.log("Makanan favorit:", parsejson.Kesukaan.makanan)
    console.log("Tempat Tinggal:", parsejson.Tempat_Tinggal[0])
} catch (error) {
    console.error("Parsing JSON gagal bro:", error.message)
}

console.log("Stringify object:", stringify)