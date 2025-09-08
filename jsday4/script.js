// //======================
//  function hitungAbsensi(absensiArr) {
//   // Validasi minimal 1 data, pakai do while
//   let valid = false;
//   do {
//     if (absensiArr.length > 0) {
//       valid = true;
//     } else {
//       console.log("Data absensi minimal 1!");
//       return "Data absensi tidak valid.";
//     }
//   } while (!valid);

//   // Variabel counter
//   let hadir = 0;
//   let alpa = 0;
//   let izin = 0;

//   // Iterasi pakai for
//   for (let i = 0; i < absensiArr.length; i++) {
//     let status = absensiArr[i];

//     // Deteksi jenis absensi pakai if
//     if (status === "Hadir") {
//       hadir++;
//     } else if (status === "Alpa") {
//       alpa++;
//     } else if (status === "Izin") {
//       izin++;
//     }
//   }

//   // Simpan hasil ke object untuk memudahkan forEach
//   let rekap = {
//     Hadir: hadir,
//     Alpa: alpa,
//     Izin: izin
//   };

//   // Print rekap dengan switch di dalam forEach
//   let hasil = [];
//   Object.keys(rekap).forEach((key) => {
//     switch (key) {
//       case "Hadir":
//         hasil.push(`Hadir: ${rekap[key]} kali`);
//         break;
//       case "Alpa":
//         hasil.push(`Alpa: ${rekap[key]} kali`);
//         break;
//       case "Izin":
//         hasil.push(`Izin: ${rekap[key]} kali`);
//         break;
//     }
//   });

//   // Hitung persentase hadir
//   let persenHadir = (hadir / absensiArr.length) * 100;

//   // Return string deskriptif
//   return hasil.join(", ") + `. %Hadir: ${persenHadir.toFixed(0)}%.`;
// }

// // Contoh penggunaan
// let dataAbsensi = ["Hadir", "Alpa", "Izin", "Hadir", "Hadir"];
// console.log(hitungAbsensi(dataAbsensi));

//======================

// function laporanKelulusan(namaArr, nilaiArr) {
//   // Validasi: jumlah data harus sama & minimal 1
//   let valid = false;
//   do {
//     if (namaArr.length > 0 && namaArr.length === nilaiArr.length) {
//       valid = true;
//     } else {
//       console.log("Data tidak valid! Panjang array tidak sama atau kosong.");
//       return "Data tidak valid.";
//     }
//   } while (!valid);

//   // Array untuk simpan hasil rekap
//   let rekap = [];

//   // Looping dengan for
//   for (let i = 0; i < namaArr.length; i++) {
//     let nama = namaArr[i];
//     let nilai = nilaiArr[i];
//     let status = "";

//     // Penilaian dengan if
//     if (nilai >= 60) {
//       status = "LULUS";
//     } else {
//       status = "TIDAK LULUS";
//     }

//     // Gunakan switch untuk status (meskipun sederhana)
//     switch (status) {
//       case "LULUS":
//         rekap.push({ nama: nama, nilai: nilai, status: status });
//         break;
//       case "TIDAK LULUS":
//         rekap.push({ nama: nama, nilai: nilai, status: status });
//         break;
//     }
//   }

//   // Print dengan forEach + operator ternary
//   let output = [];
//   rekap.forEach((item) => {
//     let teks = `${item.nama}: ${item.status} (nilai ${item.nilai})`;
//     output.push(teks);
//   });

//   return output.join("\n");
// }

// // Contoh penggunaan
// let nama = ["Ali", "Budi", "Cici"];
// let nilai = [78, 55, 95];
// console.log(laporanKelulusan(nama, nilai));

// //======================

// function analisaHafalan(hafalanArr) {
//   // Validasi input minimal 1 data pakai while
//   let i = 0;
//   while (hafalanArr.length === 0) {
//     console.log("Data hafalan tidak boleh kosong!");
//     return "Data tidak valid.";
//   }

//   // Variabel untuk simpan total hafalan
//   let total = 0;
//   let rekap = [];

//   // Loop for untuk rekap per minggu
//   for (let minggu = 0; minggu < hafalanArr.length; minggu++) {
//     let jumlah = hafalanArr[minggu];
//     total += jumlah;
//     let status = "";

//     // Switch status berdasarkan jumlah
//     switch (true) {
//       case jumlah >= 12:
//         status = "Baik";
//         break;
//       case jumlah >= 10:
//         status = "Cukup";
//         break;
//       default:
//         status = "Perlu Usaha";
//     }

//     rekap.push(`Minggu ke-${minggu + 1}: ${jumlah} ayat, status ${status}.`);
//   }

//   // Hitung rata-rata
//   let rata = total / hafalanArr.length;

//   // Print dengan forEach
//   let output = [];
//   rekap.forEach((baris) => {
//     output.push(baris);
//   });

//   // Tambahkan info rata-rata
//   output.push(`Rata-rata: ${rata.toFixed(1)} ayat.`);

//   // Return string gabungan
//   return output.join(" ");
// }

// // Contoh penggunaan
// let data = [10, 8, 14, 15, 12];
// console.log(analisaHafalan(data));

//======================

// function rekapUsia(usiaArr) {
//   // Validasi: tidak boleh ada usia negatif (pakai do while)
//   let valid = false;
//   do {
//     let adaNegatif = usiaArr.some((u) => u < 0);
//     if (usiaArr.length === 0 || adaNegatif) {
//       console.log("Data tidak valid! Usia kosong atau ada yang negatif.");
//       return "Data tidak valid.";
//     } else {
//       valid = true;
//     }
//   } while (!valid);

//   // Array untuk simpan hasil rekap
//   let rekap = [];

//   // Loop for
//   for (let i = 0; i < usiaArr.length; i++) {
//     let usia = usiaArr[i];
//     let kategori = "";

//     // Tentukan kategori dengan switch
//     switch (true) {
//       case usia < 13:
//         kategori = "Anak-anak";
//         break;
//       case usia < 20:
//         kategori = "Remaja";
//         break;
//       default:
//         kategori = "Dewasa";
//     }

//     // Simpan hasil
//     rekap.push(`Santri ${i + 1}: ${kategori} (${usia} th)`);
//   }

//   // Gabungkan dengan forEach
//   let output = [];
//   rekap.forEach((baris) => output.push(baris));

//   // Return string hasil
//   return output.join(" ");
// }

// // Contoh penggunaan
// let data = [11, 16, 22];
// console.log(rekapUsia(data));

//======================

// function daftarSalam(namaArr) {
//   // === Validasi tidak boleh ada duplikat nama (pakai while) ===
//   let valid = false;
//   while (!valid) {
//     let adaDuplikat = new Set(namaArr).size !== namaArr.length; 
//     // new Set() membuat kumpulan data unik, kalau ukuran beda berarti ada duplikat
//     if (adaDuplikat || namaArr.length === 0) {
//       console.log("Data tidak valid! Ada duplikat atau kosong.");
//       return "Data tidak valid.";
//     } else {
//       valid = true; // kalau tidak ada duplikat, data valid
//     }
//   }

//   // Array untuk simpan hasil salam
//   let salamArr = [];

//   // === Gunakan for untuk membuat salam tiap nama ===
//   for (let i = 0; i < namaArr.length; i++) {
//     let nama = namaArr[i]; // ambil nama santri ke-i
//     let salam = "";

//     // === if: deteksi nama pendek (< 4 huruf) beri salam unik ===
//     if (nama.length < 4) {
//       salam = "Halo " + nama; // salam khusus untuk nama pendek
//     } else {
//       // === switch: variasi salam jika nama mulai huruf 'A' ===
//       switch (nama[0]) {
//         case "A":
//           salam = "Ahlan wa sahlan " + nama; // salam khusus untuk nama A
//           break;
//         default:
//           salam = "Assalamualaikum " + nama; // salam umum
//       }
//     }

//     // Masukkan salam ke array hasil
//     salamArr.push(salam);
//   }

//   // === Print hasil salam dengan forEach ===
//   let output = [];
//   salamArr.forEach((s) => {
//     output.push(s); // kumpulkan semua salam jadi array teks
//   });

//   // Gabungkan semua salam jadi string baris-baris
//   return output.join("\n");
// }

// // Contoh penggunaan
// let data = ["Imam", "Maya", "Rafi"];
// console.log(daftarSalam(data));

//======================    

// function filterNilai(namaArr, nilaiArr, batas) {
//   // === Validasi data pakai while ===
//   let valid = false; // penanda validasi
//   while (!valid) {
//     if (namaArr.length === 0 || namaArr.length !== nilaiArr.length) {
//       console.log("Data tidak valid! Panjang array tidak sama atau kosong.");
//       return "Data tidak valid."; // keluar fungsi jika invalid
//     } else {
//       valid = true; // data dianggap valid, keluar dari while
//     }
//   }

//   // Array untuk menyimpan nama yang nilainya lolos
//   let lolos = [];

//   // === Loop paralel dengan for ===
//   for (let i = 0; i < namaArr.length; i++) {
//     let nama = namaArr[i];   // ambil nama sesuai indeks
//     let nilai = nilaiArr[i]; // ambil nilai sesuai indeks

//     // if untuk cek apakah nilai di atas batas
//     if (nilai > batas) {
//       let status = "LOLOS"; // tandai peserta lolos

//       // switch untuk menentukan aksi sesuai status
//       switch (status) {
//         case "LOLOS":
//           lolos.push(nama); // masukkan nama ke array lolos
//           break;
//       }
//     }
//   }

//   // === Print hasil dengan forEach ===
//   let hasil = [];
//   lolos.forEach((n) => {
//     hasil.push(n); // kumpulkan nama-nama yang lolos
//   });

//   // Return gabungan nama jadi kalimat
//   return hasil.join(" & ") + " mendapatkan nilai di atas " + batas + ".";
// }

// // Contoh penggunaan
// let nama = ["Wahyu", "Dina", "Umar"];
// let nilai = [92, 65, 88];
// let batas = 80;

// console.log(filterNilai(nama, nilai, batas));

//======================

// function rekapKegiatan(kegiatanArr) {
//   // === Validasi dengan do while ===
//   let valid = false;
//   do {
//     if (kegiatanArr.length === 0) {
//       console.log("Data kegiatan kosong!");
//       return "Data kegiatan kosong!"; // keluar kalau tidak ada kegiatan
//     } else {
//       valid = true; // data valid → keluar loop
//     }
//   } while (!valid);

//   // === Objek untuk menampung jumlah kegiatan ===
//   let rekap = {};

//   // === Loop dengan for untuk hitung jumlah ===
//   for (let i = 0; i < kegiatanArr.length; i++) {
//     let kegiatan = kegiatanArr[i];

//     // switch untuk cek jenis kegiatan
//     switch (kegiatan) {
//       case "Coding":
//         rekap["Coding"] = (rekap["Coding"] || 0) + 1;
//         break;
//       case "Ngaji":
//         rekap["Ngaji"] = (rekap["Ngaji"] || 0) + 1;
//         break;
//       case "Sholat":
//         rekap["Sholat"] = (rekap["Sholat"] || 0) + 1;
//         break;
//       default:
//         rekap[kegiatan] = (rekap[kegiatan] || 0) + 1;
//         break;
//     }
//   }

//   // === Cetak hasil dengan forEach ===
//   let hasil = [];
//   Object.keys(rekap).forEach((k) => {
//     hasil.push(k + " " + rekap[k]);
//   });

//   // Return deskripsi gabungan
//   return hasil.join(", ");
// }

// // Contoh penggunaan
// let kegiatan = ["Coding", "Ngaji", "Coding", "Sholat", "Ngaji"];
// console.log(rekapKegiatan(kegiatan));

//======================

// function listSantri(statusArr, namaArr) {
//   // === Validasi dengan while ===
//   let valid = false;
//   while (!valid) {
//     if (statusArr.length === 0 || namaArr.length === 0 || statusArr.length !== namaArr.length) {
//       console.log("Data tidak valid! Array kosong atau jumlah tidak sama.");
//       return "Data tidak valid!";
//     }
//     // cek minimal ada 1 santri Mukim
//     if (!statusArr.includes("Mukim")) {
//       console.log("Harus ada minimal 1 santri Mukim!");
//       return "Harus ada minimal 1 santri Mukim!";
//     }
//     valid = true; // kalau lolos semua, data valid
//   }

//   // === Objek penampung santri berdasarkan status ===
//   let rekap = {
//     Mukim: [],
//     Online: []
//   };

//   // === Loop paralel dengan for ===
//   for (let i = 0; i < statusArr.length; i++) {
//     let status = statusArr[i]; // ambil status santri
//     let nama = namaArr[i];     // ambil nama santri

//     // if + switch klasifikasi
//     if (status === "Mukim" || status === "Online") {
//       switch (status) {
//         case "Mukim":
//           rekap.Mukim.push(nama);
//           break;
//         case "Online":
//           rekap.Online.push(nama);
//           break;
//       }
//     } else {
//       console.log("Status tidak dikenal:", status);
//     }
//   }

//   // === Print hasil dengan forEach ===
//   let hasil = [];
//   Object.keys(rekap).forEach((key) => {
//     if (rekap[key].length > 0) {
//       hasil.push("Santri " + key + ": " + rekap[key].join(", "));
//     }
//   });

//   // === Return kalimat akhir ===
//   return hasil.join(" | ");
// }

// // Contoh penggunaan
// let status = ["Mukim", "Online", "Mukim"];
// let nama = ["Rini", "Ari", "Yusuf"];
// console.log(listSantri(status, nama));

//======================

// function nilaiTertinggi(namaArr, nilaiArr) {
//   // === Validasi dengan while ===
//   let valid = false;
//   while (!valid) {
//     if (namaArr.length === 0 || nilaiArr.length === 0 || namaArr.length !== nilaiArr.length) {
//       console.log("Data tidak valid! Panjang array kosong atau tidak sama.");
//       return "Data tidak valid!";
//     } else {
//       valid = true;
//     }
//   }

//   // === Cari nilai tertinggi dengan for ===
//   let maxNilai = nilaiArr[0];    // asumsi nilai pertama tertinggi
//   let maxNama = namaArr[0];      // simpan nama sesuai nilai tertinggi

//   for (let i = 1; i < nilaiArr.length; i++) {
//     if (nilaiArr[i] > maxNilai) {
//       maxNilai = nilaiArr[i];    // update nilai tertinggi
//       maxNama = namaArr[i];      // update nama sesuai nilai
//     }
//   }

//   // === if dan switch untuk simbol bintang jika nilai sempurna ===
//   let simbol = "";
//   if (maxNilai === 100) {
//     switch (true) {
//       case (maxNilai === 100):
//         simbol = " *"; // beri tanda bintang
//         break;
//     }
//   }

//   // === Print hasil dengan forEach (cek semua nilai) ===
//   let daftar = [];
//   namaArr.forEach((n, i) => {
//     daftar.push(n + ": " + nilaiArr[i]);
//   });

//   // Return kalimat akhir
//   return "Nilai tertinggi " + maxNama + ": " + maxNilai + simbol;
// }

// // Contoh penggunaan
// let nama = ["Ana", "kiki", "udin"];
// let nilai = [77, 95, 80];
// console.log(nilaiTertinggi(nama, nilai));

//======================

// function filterNIS(nisArr) {
//   // === Validasi dengan do while ===
//   let valid = false;
//   do {
//     if (nisArr.length === 0) {
//       console.log("Data kosong!");
//       return "Data kosong!";
//     } else {
//       valid = true; // data ada, keluar loop
//     }
//   } while (!valid);

//   // === Array untuk menampung NIS valid & invalid ===
//   let validArr = [];
//   let invalidArr = [];

//   // === Loop dengan for ===
//   for (let i = 0; i < nisArr.length; i++) {
//     let nis = nisArr[i];

//     // if + switch untuk klasifikasi valid/invalid
//     if (nis.length === 6) {
//       switch (true) {
//         case (nis.length === 6):
//           validArr.push(nis);
//           break;
//       }
//     } else {
//       switch (true) {
//         case (nis.length !== 6):
//           invalidArr.push(nis);
//           break;
//       }
//     }
//   }

//   // === Output dengan forEach ===
//   let validStr = [];
//   validArr.forEach((v) => {
//     validStr.push(v);
//   });

//   let invalidStr = [];
//   invalidArr.forEach((v) => {
//     invalidStr.push(v);
//   });

//   // === Return hasil akhir ===
//   return "NIS valid: " + validStr.join(", ") + "; NIS invalid: " + invalidStr.join(", ");
// }

// // Contoh penggunaan
// let nis = ["123456", "765432", "1234"];
// console.log(filterNIS(nis));

//======================

// function totalKegiatan(partArr) {
//   // === Validasi dengan do while (array tidak boleh kosong) ===
//   let valid = false;
//   do {
//     if (partArr.length === 0) {
//       console.log("Data partisipasi kosong!");
//       return "Data kosong!";
//     } else {
//       valid = true;
//     }
//   } while (!valid);

//   // === Variabel untuk total, min, max ===
//   let total = 0;
//   let min = partArr[0];
//   let max = partArr[0];

//   // === Loop dengan for untuk jumlah dan cari min/max ===
//   for (let i = 0; i < partArr.length; i++) {
//     let val = partArr[i];

//     // Penjumlahan total
//     total += val;

//     // Cari min dan max dengan if + switch
//     if (val < min) {
//       switch (true) {
//         case (val < min):
//           min = val;
//           break;
//       }
//     }
//     if (val > max) {
//       switch (true) {
//         case (val > max):
//           max = val;
//           break;
//       }
//     }
//   }

//   // === Hitung rata-rata dengan operator aritmatika ===
//   let rata = total / partArr.length;

//   // === Cetak tiap elemen dengan forEach (opsional, rekap harian) ===
//   console.log("Rekap Harian:");
//   partArr.forEach((v, i) => {
//     console.log("Hari ke-" + (i + 1) + ": " + v + " kali");
//   });

//   // === Return hasil akhir ===
//   return "Total partisipasi: " + total + " kali, rata-rata " + rata.toFixed(1) + "/hari, max " + max + ", min " + min;
// }

// // Contoh penggunaan
// let partisipasi = [2, 3, 4, 1];
// console.log(totalKegiatan(partisipasi));

//======================

// function statJam(jamArr) {
//   // === Validasi dengan do while ===
//   let valid = false;
//   do {
//     if (jamArr.length === 0) {
//       console.log("Data jam kosong!");
//       return "Data tidak ada!";
//     } else {
//       valid = true;
//     }
//   } while (!valid);

//   // === Variabel awal ===
//   let total = 0;
//   let min = jamArr[0];
//   let max = jamArr[0];

//   // === Loop dengan for untuk jumlah + min + max ===
//   for (let i = 0; i < jamArr.length; i++) {
//     let jam = jamArr[i];

//     total += jam; // jumlahkan

//     if (jam < min) {
//       min = jam; // update min
//     }
//     if (jam > max) {
//       max = jam; // update max
//     }
//   }

//   // === Hitung rata-rata ===
//   let rata = total / jamArr.length;

//   // === Output detail dengan forEach ===
//   console.log("Rekap Jam Harian:");
//   jamArr.forEach((j, i) => {
//     console.log("Hari ke-" + (i + 1) + ": " + j + " jam");
//   });

//   // === Return hasil akhir ===
//   return "Jam belajar terbanyak " + max + ", tersedikit " + min + ", rata-rata " + rata.toFixed(0);
// }

// // Contoh penggunaan
// let jamBelajar = [3, 6, 2, 5];
// console.log(statJam(jamBelajar));

//======================

// function selisihHafalan(hafalanArr) {
//   // === Validasi dengan do while (array minimal punya 2 data) ===
//   let valid = false;
//   do {
//     if (hafalanArr.length < 2) {
//       console.log("Data hafalan kurang! Minimal 2 minggu.");
//       return "Data tidak cukup!";
//     } else {
//       valid = true;
//     }
//   } while (!valid);

//   // === Array untuk menampung hasil perbandingan ===
//   let hasil = [];

//   // === Loop for untuk menghitung selisih antar minggu ===
//   for (let i = 0; i < hafalanArr.length - 1; i++) {
//     let selisih = hafalanArr[i + 1] - hafalanArr[i];
//     let status = "";

//     // === Switch untuk menentukan naik/turun/tetap ===
//     switch (true) {
//       case selisih > 0:
//         status = "naik " + selisih + " ayat";
//         break;
//       case selisih < 0:
//         status = "turun " + Math.abs(selisih) + " ayat";
//         break;
//       default:
//         status = "tetap";
//     }

//     hasil.push(`Minggu ${i + 1}-${i + 2}: ${status}`);
//   }

//   // === Output dengan forEach (jika ingin print satu-satu) ===
//   console.log("Rekap Selisih Hafalan:");
//   hasil.forEach((h) => console.log(h));

//   // === Return hasil gabungan ===
//   return hasil.join(", ");
// }

// // Contoh penggunaan
// let data = [5, 10, 15, 12];
// console.log(selisihHafalan(data));

// //======================

// function formatGuru(namaArr, genderArr) {
//   // === Validasi dengan while: data harus ada dan panjang sama ===
//   let i = 0;
//   while (i === 0) {
//     if (namaArr.length === 0 || namaArr.length !== genderArr.length) {
//       console.log("Data tidak valid! Nama dan gender harus seimbang & tidak boleh kosong.");
//       return "Data tidak valid!";
//     }
//     i++; // keluar dari while kalau valid
//   }

//   // === Array hasil format ===
//   let hasil = [];

//   // === Loop paralel dengan for ===
//   for (let j = 0; j < namaArr.length; j++) {
//     let nama = namaArr[j];
//     let gender = genderArr[j];
//     let prefix = "";

//     // === switch untuk tentukan prefix sesuai gender ===
//     switch (gender) {
//       case "L":
//         prefix = "Ustadz";
//         break;
//       case "P":
//         prefix = "Ustadzah";
//         break;
//       default:
//         prefix = "Guru"; // fallback kalau tidak L/P
//     }

//     hasil.push(prefix + " " + nama);
//   }

//   // === Output detail dengan forEach (opsional print satu-satu) ===
//   console.log("Daftar Guru:");
//   hasil.forEach((g) => console.log(g));

//   // === Return gabungan hasil ===
//   return hasil.join("; ");
// }

// // Contoh penggunaan
// let nama = ["Ahmad", "Fatimah"];
// let gender = ["L", "P"];
// console.log(formatGuru(nama, gender));

//======================

// function rekapTamat(khatamArr) {
//   // === Validasi dengan do while: data minimal 1 ===
//   let valid = false;
//   do {
//     if (khatamArr.length === 0) {
//       console.log("Data kosong!");
//       return "Data tidak ada!";
//     } else {
//       valid = true;
//     }
//   } while (!valid);

//   // === Hitung jumlah santri khatam 30 juz ===
//   let jumlah = 0;

//   // Loop dengan forEach
//   khatamArr.forEach((juz) => {
//     if (juz === 30) {
//       switch (true) {
//         case (juz === 30):
//           jumlah++;
//           break;
//       }
//     }
//   });

//   // === Return hasil ===
//   return jumlah + " santri telah khatam 30 juz";
// }

// // Contoh penggunaan
// let data = [28, 30, 35, 30, 29];
// console.log(rekapTamat(data));

//======================

// function statusNilai(nilaiArr) {
//   // === Validasi dengan do while: harus ada minimal 1 data ===
//   let valid = false;
//   do {
//     if (nilaiArr.length === 0) {
//       console.log("Data nilai kosong!");
//       return "Data tidak ada!";
//     } else {
//       valid = true;
//     }
//   } while (!valid);

//   // === Array untuk menampung hasil ===
//   let hasil = [];

//   // === Loop dengan for untuk menentukan status nilai ===
//   for (let i = 0; i < nilaiArr.length; i++) {
//     let nilai = nilaiArr[i];
//     let status = "";

//     // === if + switch untuk klasifikasi nilai ===
//     if (nilai >= 80) {
//       switch (true) {
//         case (nilai >= 80):
//           status = "Baik";
//           break;
//       }
//     } else if (nilai >= 60) {
//       switch (true) {
//         case (nilai >= 60 && nilai < 80):
//           status = "Cukup";
//           break;
//       }
//     } else {
//       switch (true) {
//         case (nilai < 60):
//           status = "Kurang";
//           break;
//       }
//     }

//     hasil.push(`${nilai}: ${status}`);
//   }

//   // === Cetak detail dengan forEach ===
//   console.log("Rekap Status Nilai:");
//   hasil.forEach((h) => console.log(h));

//   // === Return hasil akhir ===
//   return hasil.join(", ");
// }

// // Contoh penggunaan
// let data = [80, 60, 75, 55];
// console.log(statusNilai(data));

//======================

// function hariIzinSakit(statusArr) {
//   // === Validasi dengan while: array tidak boleh kosong ===
//   let i = 0;
//   while (i === 0) {
//     if (statusArr.length === 0) {
//       console.log("Data status kosong!");
//       return "Data tidak ada!";
//     }
//     i++; // keluar dari while kalau valid
//   }

//   // === Array penampung hari izin/sakit ===
//   let hariIzinSakit = [];

//   // === Loop dengan for ===
//   for (let j = 0; j < statusArr.length; j++) {
//     let status = statusArr[j];
//     let hari = j + 1; // index +1 biar sesuai hari ke-

//     // === if + switch ===
//     if (status === "Izin" || status === "Sakit") {
//       switch (status) {
//         case "Izin":
//         case "Sakit":
//           hariIzinSakit.push(hari);
//           break;
//         default:
//           // tidak masuk apa-apa kalau "Hadir"
//           break;
//       }
//     }
//   }

//   // === Return hasil string ===
//   if (hariIzinSakit.length === 0) {
//     return "Tidak ada santri yang izin/sakit minggu ini";
//   } else {
//     return "Santri izin/sakit pada hari ke-" + hariIzinSakit.join(",");
//   }
// }

// // Contoh penggunaan
// let data = ["Hadir", "Izin", "Sakit", "Hadir", "Izin"];
// console.log(hariIzinSakit(data));

//=====================

// function validasiNIS(nisArr) {
//   // === Validasi dengan do while (minimal 1 data) ===
//   let valid = false;
//   do {
//     if (nisArr.length === 0) {
//       console.log("Data NIS kosong!");
//       return "Data tidak ada!";
//     } else {
//       valid = true;
//     }
//   } while (!valid);

//   // === Penampung hasil valid/invalid ===
//   let validNIS = [];
//   let invalidNIS = [];

//   // === Loop dengan for ===
//   for (let i = 0; i < nisArr.length; i++) {
//     let nis = nisArr[i];

//     // === if + switch ===
//     if (nis.length === 6) {
//       switch (true) {
//         case (nis.length === 6):
//           validNIS.push(nis);
//           break;
//       }
//     } else {
//       switch (true) {
//         case (nis.length !== 6):
//           invalidNIS.push(nis);
//           break;
//       }
//     }
//   }

//   // === Return hasil string ===
//   return "NIS valid: " + validNIS.join(", ") + "; NIS invalid: " + invalidNIS.join(", ");
// }

// // Contoh penggunaan
// let data = ["123456","654321","54321"];
// console.log(validasiNIS(data));

//======================

// function kelompokKegiatan(arrKegiatan) {
//   // === Validasi sederhana dengan if ===
//   if (arrKegiatan.length === 0) {
//     return "Data kegiatan kosong!";
//   }

//   // === Object untuk menghitung jumlah kegiatan ===
//   let hitung = {};

//   // === Loop dengan for ===
//   for (let i = 0; i < arrKegiatan.length; i++) {
//     let kegiatan = arrKegiatan[i];

//     // === switch untuk kelompok kegiatan ===
//     switch (kegiatan) {
//       case "Sholat":
//       case "Ngaji":
//       case "Olahraga":
//       case "Coding":
//         if (hitung[kegiatan]) {
//           hitung[kegiatan]++;
//         } else {
//           hitung[kegiatan] = 1;
//         }
//         break;
//       default:
//         // Jika kegiatan di luar daftar, tetap dihitung
//         if (hitung[kegiatan]) {
//           hitung[kegiatan]++;
//         } else {
//           hitung[kegiatan] = 1;
//         }
//         break;
//     }
//   }

//   // === Cetak hasil dengan forEach ===
//   let hasil = [];
//   Object.keys(hitung).forEach((k) => {
//     hasil.push(`${k}: ${hitung[k]} kali`);
//   });

//   // === Return string ===
//   return hasil.join("; ");
// }

// // Contoh penggunaan
// let data = ["Sholat","Ngaji","Olahraga","Coding","Ngaji"];
// console.log(kelompokKegiatan(data));

//======================

function angkaSeringMuncul(angkaArr) {
  // === Validasi sederhana ===
  if (angkaArr.length === 0) {
    return "Data kosong!";
  }

  // === Objek untuk menyimpan frekuensi angka ===
  let frekuensi = {};

  // === Hitung frekuensi dengan forEach ===
  angkaArr.forEach((angka) => {
    if (frekuensi[angka]) {
      frekuensi[angka]++;
    } else {
      frekuensi[angka] = 1;
    }
  });

  // === Cari angka dengan frekuensi terbesar ===
  let maxAngka = null;
  let maxCount = 0;

  for (let angka in frekuensi) {
    if (frekuensi[angka] > maxCount) {
      maxCount = frekuensi[angka];
      maxAngka = angka;
    } else if (frekuensi[angka] === maxCount) {
      // === switch jika ada frekuensi sama ===
      switch (true) {
        case (parseInt(angka) < parseInt(maxAngka)):
          maxAngka = angka;
          break;
      }
    }
  }

  // === Output string ===
  return `Angka ${maxAngka} muncul paling sering, sebanyak ${maxCount} kali`;
}

// Contoh penggunaan
let data = [1,2,2,3,1,2];
console.log(angkaSeringMuncul(data));
