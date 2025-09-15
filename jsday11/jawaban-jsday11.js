//1.
const mahasiswa = {
    alice: { math: 85, english: 90, science: 88 },
    bob: { math: 78, english: 85, science: 82 },
    carol: { math: 92, english: 89, science: 94 }
};

let nama = Object.keys(mahasiswa)
console.log(`nama mahasiswa : ${nama}`)

console.log("\n2. Rata-rata setiap mahasiswa:");
for (let nama in mahasiswa) {
    let values = Object.values(mahasiswa[nama]);
    let total = values.reduce((acc, nilai) => acc + nilai, 0);
    let rataRata = (total / values.length)
        console.log(`${nama} rata-rata: ${rataRata}`);
}
for (let [key, value] of Object.entries(mahasiswa)) {
    console.log(key, value)
}
let dataTambahan = { david: { math: 88, english: 91, science: 85 } };
let lengkap = { ...mahasiswa, ...dataTambahan }
console.log(lengkap)

//2.
const playlist = [
    { judul: "Al-Fatihah", qari: "Mishary Rashid", durasi: 42, juz: 1 },
    { judul: "Al-Baqarah", qari: "Abdul Rahman As-Sudais", durasi: 7380, juz: 1 },
    { judul: "Ar-Rahman", qari: "Saad Al-Ghamdi", durasi: 810, juz: 27 },
    { judul: "Al-Mulk", qari: "Maher Al Muaiqly", durasi: 540, juz: 29 }
];

let juz = playlist.filter(item => item.juz === 1)
console.log(juz)

let durasi = playlist.reduce((acc, { durasi }) => acc + durasi, 0) 
console.log(`total detik : ${durasi} detik ${(durasi/60).toFixed(1)} menit atau ${(durasi/3600).toFixed(2)} jam`)

let judul = playlist.map(({judul, qari}) => `${judul} - ${qari}`)
console.log(judul)

let terpanjang = playlist.reduce((item, durasi) => item.durasi > durasi.durasi ? item : durasi, { durasi: 0 }
);
let menit = Math.floor(terpanjang.durasi / 60);
console.log(`${terpanjang.judul} ${terpanjang.durasi} detik atau ${menit} menit`);

let tambahan = {judul : "Al-Mulk", qari: "irgi", durasi: 680, juz: 11 };
let total = { tambahan, ...playlist }
console.table(total)

//3.
const pengeluaran = [
    { hari: "Senin", kategori: "makan", jumlah: 25000 },
    { hari: "Senin", kategori: "transport", jumlah: 15000 },
    { hari: "Selasa", kategori: "makan", jumlah: 30000 },
    { hari: "Selasa", kategori: "hiburan", jumlah: 50000 },
    { hari: "Rabu", kategori: "makan", jumlah: 20000 }
];

let totalpengeluaran = pengeluaran.reduce((number, { jumlah }) => number + jumlah, 0);
console.log("Total Pengeluaran: Rp.", totalpengeluaran);

let totalPerKategori = pengeluaran.reduce((item, { kategori, jumlah }) => {
  return { ...item, [kategori]: (item[kategori] || 0) + jumlah };
}, {});
console.log(totalPerKategori);

let totalharian = pengeluaran.reduce((item, { hari, jumlah }) => {
  return { ...item, [hari]: (item[hari] || 0) + jumlah };
}, {});
console.log(totalharian);

let pengeluarantotal = pengeluaran.filter(({jumlah}) => jumlah >= 25000)
console.log(pengeluarantotal)

//4.
const kontakLama = { mama: "08123456789", papa: "08987654321" };
const kontakBaru = [["adik", "08111222333"], ["kakak", "08444555666"]];

let gabungan = { ...kontakLama, ...Object.fromEntries(kontakBaru) }
console.log(gabungan);

let nomer = Object.values(gabungan)
console.log(nomer)  

let daftarKontak = Object.entries(gabungan).map(([nama, nomer]) => ({nama, nomer}))
console.log(daftarKontak)

const kontak = Object.fromEntries(
  Object.entries(gabungan).map(([nama, nomer]) => [`${nama}, +62${nomer.slice(1)}`])
);
console.log(kontak);

//5.
const nilaiKelas = [
    { nama: "Alice", tugas: [80, 85, 90], uts: 88, uas: 92 },
    { nama: "Bob", tugas: [75, 80, 85], uts: 82, uas: 86 },
    { nama: "Carol", tugas: [90, 95, 88], uts: 91, uas: 89 }
];

let rataRataTugas = nilaiKelas.map(({ nama, tugas }) => {
  let total = tugas.reduce((a, b) => a + b, 0);
  let rata2 = total / tugas.length;
  return { nama, rataTugas: rata2 };
});
console.log(rataRataTugas);

let ringkasanNilai = nilaiKelas.map(({ nama, tugas, uts, uas }) => {
  let totalTugas = tugas.reduce((a, b) => a + b, 0);
  let rataTugas = totalTugas / tugas.length;
  let nilaiAkhir = (rataTugas * 0.3) + (uts * 0.3) + (uas * 0.4);
  return {nama, rataTugas, uts, uas, nilaiAkhir: nilaiAkhir.toFixed(1) 
  };
});
console.log(ringkasanNilai);

let lulus = ringkasanNilai.filter(siswa => siswa.nilaiAkhir >= 80);
console.log("semua siswa yang lulus:");
console.table(lulus)

let siswaTerbaik = ringkasanNilai.reduce((a, b) => a.nilaiAkhir > b.nilaiAkhir ? a : b);
console.log("siswa terbaik:");
console.log(siswaTerbaik);

// 5.
let laporan = ringkasanNilai.map(({ nama, rataTugas, uts, uas, nilaiAkhir }) => {
  return [`${nama}, ${nilaiAkhir} (lulus);`]
});
console.log(laporan.join('\n'));