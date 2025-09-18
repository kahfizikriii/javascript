
import { prosesTransaksi } from './transaksi.js';

const belanja = [
  { nama: "Indomie", harga: 3000, qty: 5 },
  { nama: "Susu", harga: 15000, qty: 2 },
  { nama: "Roti", harga: 7000, qty: 1 }
];

const hasil = prosesTransaksi(belanja, 100000);

console.log("Subtotal :", hasil.total);
console.log("Pajak    :", hasil.ppn);
console.log("Diskon   :", hasil.potongan);
console.log("Total    :", hasil.totalBayar);
console.log("Bayar    :", hasil.bayar);
console.log("Kembali  :", hasil.kembali);
