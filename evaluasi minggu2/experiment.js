
let santri = [
  { name: 'irgi', hafal: 12 },
  { name: 'xena', hafal: 8 },
  { name: 'toriq', hafal: 15 }
];
const alumni = [
  { name: 'ucup', hafal: 30 },
  { name: 'tsaqif ', hafal: 25 }
];

santri.push({ name: 'kahfi', hafal: 5 }); // menambahkan data di akhir array
santri.unshift({ name: 'farid', hafal: 3 }); // menambahkan data di awal array
console.log("data santri setelah diubah:", santri);

santri.pop(); // menghapus data array yg terakhir
santri.shift(); // mengahpus data array yg pertama
console.log('data santri setelah alumni:', santri);

let idx = santri.map(s => s.name).indexOf('xena'); // cari index berdasarkan nama
console.log( 'xena', idx);

let gabung1 = santri.concat(alumni); // menggabungkan data dalam array menggunakan concat
let gabung2 = [...santri, ...alumni]; // menggabungkan data dalam array menggunakan spread
console.log(gabung2);
console.log(gabung1);

let total = santri.reduce((acc, s) => acc + s.hafal, 0); // menjumlahkan data dalam array menggunakan reduce
console.log('total hafalan santri yg belum alumni:',total);



