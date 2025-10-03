### 2. Memahami Perbedaan JSX dengan HTML

**Apa itu JSX?**

HTML adalah markup untuk halaman web yang biasa diproses langsung oleh browser.

JSX adalah sintaks khusus untuk JavaScript yang digunakan dalam framework seperti React, yang memungkinkan kita menulis HTML dalam kode JavaScript dengan kemampuan untuk memasukkan logika dan variabel.

Jadi, meskipun JSX terlihat seperti HTML, JSX adalah bagian dari JavaScript yang perlu diproses terlebih dahulu, sementara HTML adalah bahasa markah yang dipahami langsung oleh browser.

**Perbedaan Utama antara JSX dan HTML:**

| Aspek                 | HTML                            | JSX                                 |
|----------------------|----------------------------------|--------------------------------------|
| Atribut kelas         | `class`                         | `className`                          |
| Label untuk input     | `for`                           | `htmlFor`                            |
| Ekspresi JavaScript   | Tidak bisa                      | Bisa dengan `{}`                     |
| Penutupan tag         | Boleh tidak ditutup (e.g. `<br>`) | Harus ditutup (e.g. `<br />`)        |

---

**Contoh Perbedaan JSX dan HTML:**

```html
<!-- HTML -->
<h1 class="title">Halo Dunia!</h1>
<label for="nama">Nama</label>
```<!-- JSX -->
<h1 className="title">Halo Dunia!</h1>
<label htmlFor="nama">Nama</label> 
```

### 3. Menjelaskan Konsep Virtual DOM

**Apa itu Virtual DOM?**

Virtual DOM (Document Object Model) adalah representasi dari struktur UI dalam bentuk objek JavaScript yang berada di dalam memori (memory). React menggunakan Virtual DOM untuk meningkatkan efisiensi dan performa aplikasi web.

**Bagaimana Cara Kerjanya di React?**

1. Ketika terjadi perubahan data (state/props), React tidak langsung memperbarui DOM asli (Real DOM).
2. React akan terlebih dahulu membuat salinan Virtual DOM baru berdasarkan perubahan tersebut.
3. Kemudian React membandingkan Virtual DOM baru dengan versi sebelumnya menggunakan algoritma yang disebut **diffing**.
4. Hasil perbandingan digunakan untuk mengetahui bagian mana yang berubah.
5. React kemudian hanya memperbarui bagian yang berubah di Real DOM (bukan seluruh halaman), proses ini disebut **reconciliation**.

**Keuntungan Penggunaan Virtual DOM:**
- Proses rendering menjadi lebih cepat.
- Mengurangi operasi langsung pada DOM yang dikenal lambat.
- Meningkatkan performa aplikasi secara keseluruhan.

---

### 4. Menjelaskan Perbedaan SPA vs MPA

#### **SPA (Single Page Application)**

SPA adalah aplikasi web yang hanya memuat satu halaman HTML utama. Navigasi antar "halaman" dilakukan secara dinamis dengan JavaScript tanpa melakukan reload penuh ke server.

**Kelebihan SPA:**
-  **Responsif dan cepat:** karena hanya bagian tertentu dari halaman yang diperbarui.
-  **Pengalaman pengguna lebih halus**, cocok untuk aplikasi mobile dan interaktif.

**Kekurangan SPA:**
-  **SEO lebih sulit:** mesin pencari kesulitan mengindeks halaman dinamis.
-  **Initial load lebih lambat:** karena semua JavaScript dimuat di awal.

#### **MPA (Multi Page Application)**

MPA adalah aplikasi web tradisional di mana setiap halaman adalah file HTML terpisah dan navigasi menyebabkan reload penuh dari halaman.

**Kelebihan MPA:**
-  **SEO friendly:** mudah diindeks karena halaman bersifat statis.
-  **Skalabilitas baik untuk aplikasi besar** seperti e-commerce atau portal berita.

**Kekurangan MPA:**
-  **Reload halaman penuh setiap navigasi**, yang bisa terasa lambat.
-  **Pengelolaan state dan UI lebih kompleks** karena berpindah antar halaman.



