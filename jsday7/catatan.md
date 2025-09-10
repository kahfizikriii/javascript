let buah = ["apel", "jeruk", "anggur", "semangka"]
    for (let i = 0; i < buah.length; i++) {
        if (buah[i] === "anggur") {
            // console.log(anggur ada di indeks ke-${i});
            break; // untuk menghentikan looping                
             i += buah.length; // memanipulasikan menjadi false supaya berhenti
        } else {
            // console.log(anggur tidak ada di indeks ke-${i});
        }
    }    
    // console.log(buah.indexOf("semangka")); // untuk melihat no gerbong index
    // console.log(buah.includes("semangka")); // returnya boolean hanya ngecek ada atau tidak maka false or true
    // console.table(buah);
    
    let hewan = "cat"
    let motor = [
        "mx king",
        "beat",
        "vario",
        "scoopy",
        ["ninja","win",["vespa",'jupiter',"nmx"]], // buat array di dalam array
        hewan
    ]
    // console.log(motor[4][2][1]); // cara ngambil value array yang berada di dalam array // array tersebut ada di index berapa[] dan value tersebut ada di index ke berapa[]

    // function renderArray(arr) {
    //     let hasil = ""; // suapaya bisa diakses sama semua scoope didalam function ini
    //     let hasil2 = [];
    //     if (Array.isArray(motor)){ // ngecek apakah array jika iya maka true
    //         for (let i = 0; i < arr.length; i++) {
    //             // hasil += ${motor[i]} \n; // hasil = hasil + motor[0,1,2,3,4,5]
    //             hasil2.push(arr[i]); // push dipakai buat nambahin data baru ke bagian paling akhir array
    //         }  
    //      }
    //      return hasil2; // output nya hasil
    //  }
    //   console.table([renderArray(motor)]);
    
    
 function renderArray3(arr) {
        let hasil2 = []; 
        if (Array.isArray(arr)){ // jika motor adalah array = true
            for (let i = 0; i < arr.length; i++) { // karena array jadi dibuat array
                if (Array.isArray(arr[i])) { // jika didalam array ada array lagi
                    for (let j = 0; j < arr[i].length; j++) { // karena ada array 2 maka di loop/ di cek ulang data array2
                        if (Array.isArray(arr[i][j])) { // jika didalam array 2 ada array 3
                     for (let k = 0; k < arr[i][j].length; k++) { // karena ada array 3 maka di loop/ di cek ulang data array3
                        hasil2.push(arr[i][j][k]); // data array2 dan array3 dimasukkan kedalam array
                     } // array3
                        } else { // jika tidak ada array2 maka data motor di masukkan array
                            hasil2.push(arr[i][j]);        
                }
            }   // array 2
                } else { // jika tidak ada array lagi maka data motor masukkan ke array
                    hasil2.push(arr[i]);
            } 
            
         } // array utama
     } else{
        return "bukan array"
     }
     return hasil2; // output nya hasil
 }
//  console.table([renderArray3(motor)]);


const producst = ["laptop", "mouse", "keyboard", "monitor"]
// console.table(producst);
// console.log(1. ${producst});
// console.log(panjang data dalam array adalah ${producst.length});
// for (let i = 0; i < producst.length; i++){
//     console.log(${i+1}. ${producst[i]});
// } 

const fruits = ["apel","jeruk"];
 fruits.push("mangga");
// console.log(fruits.length);
// console.log(fruits);

const colors = ["merah", "hijau", "biru"];
const removedColor = colors.pop();
// console.log(colors); // Output: ["merah", "hijau"]
// console.log(removedColor); // Output: "biru"

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(a,b,c) {
    console.log(index ke-${b} pada data array ${a});
});

const cities = ["Jakarta", "Surabaya", "Bandung"];
console.log(cities.includes("Surabaya")); // Output: true
console.log(cities.includes("Medan")); // Output: false

const tasks = ["Coding", "Testing"];
tasks.unshift("Planning"); // 
console.log(tasks); // Output: ["Planning", "Coding", "Testing"]

const queue = ["Pertama", "Kedua", "Ketiga"];
const firstItem = queue.shift(); // untuk menghapus data di awal array
console.log(firstItem); // Output: "Pertama"
console.log(queue); // Output: ["Kedua", "Ketiga"]

const animals = ["kucing", "anjing", "kelinci"];
console.log(animals.indexOf("anjing")); // Output: 1 untuk mengecek data array di index 0
console.log(animals.indexOf("hamster")); // Output: -1

const fib = [0,1];
for(i=0;i<38;i++){
    fib.push(fib[i]+fib[i+1])
};

let skor = ['88','90','78'];
skor.forEach(function(a,b,c){ 
    console.log(skor ke ${b+1} adalah ${a});
    
})