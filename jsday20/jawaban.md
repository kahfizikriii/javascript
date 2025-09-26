## Jawaban Teori 
1. fungsi required pada form validasi adalah field yg wajib di isi yg gaboleh kosong.
2. cara menggunakan nya adalah :
  ```<input type="email" id="email" name="email" pattern=".+@.+" required>```
3. min itu jumlah karakter maksimal nya 
minlength itu nilai minimal nya seperti tanggal atau angka
4. jika saat submit mengalami error atau kesalahan kita menggunakan ```event.preventDeafult()``` agar mengehentikan form saat submit mengalami kesalahan atau eror
5. validasi di html lebih mudah karna otomatis server yg memeriksa validasi nya 
validasi di javascript lebih sulit karna kita sendiri yg menghandle atau mengkostum validasi serta aturan validasi nya dan lebih banyak kode yg di keluarkan
