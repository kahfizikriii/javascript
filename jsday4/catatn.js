1. Function : Kode di dalam fungsi akan dieksekusi ketika "sesuatu" memanggil fungsi tersebut:

- Ketika dipanggil (dipanggil) dari kode JavaScript
- Ketika suatu peristiwa terjadi (pengguna mengklik tombol)
- Secara otomatis (dipanggil sendiri)


function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);


2. Switch : Berdasarkan suatu kondisi, switch memilih satu atau beberapa blok kode untuk dieksekusi.

switch mengeksekusi blok kode yang cocok dengan suatu ekspresi.

switch sering digunakan sebagai alternatif yang lebih mudah dibaca daripada banyak pernyataan if...else if...else, terutama ketika berhadapan dengan beberapa kemungkinan nilai.

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

3. Loops : Perulangan berguna jika Anda ingin menjalankan kode yang sama berulang-ulang kali, setiap kali dengan nilai yang berbeda.

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

Perbedaan pada jenis loop :

for         :    Mengulangi nilai dan ekspresi
while       :    Mengulangi suatu kondisi
do...while  :    Mengulangi suatu kondisi
for...in    :    Mengulangi properti suatu Objek
for...of    :    Mengulangi objek seperti array
forEach()   :    Mengulangi setiap elemen dalam Array

Contoh 

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

while (i < 10) {
  text += "The number is " + i;
  i++;
}

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);