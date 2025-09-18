
export default {
    hitungJumlah: (Buku, tebal) => Buku / tebal,
    cariBuku: (Buku, judul) => 
        Buku.find(b => b.judul === judul),
    bukuTebal: (Buku) => 
        Buku.filter(b => b.halaman > 300)
};
