const menumakanan = {
    data : [],
    nextid : 1,

    tambahbanyak : function (...makanan) {
        makanan.forEach(item => {
            if (item) {
            let objmakanan = {
                id : this.nextid++,
                nama : item.nama,
                harga : item.harga,
                tersedia : true
            }
            this.data.push(objmakanan)
            console.log(`${item} ditambahkan`); 
        }
    });
    },

    lihat : function () {
        console.log("==== Menu Data Makanan ====");
        if( this.data.length === 0){
            console.log("tidak ada menu");
            return;
        }   
        this.data.forEach((item, index) => {
            let {id, nama, harga, tersedia} = item
            let status = tersedia ? "Tersedia" : "Tidak tersedia"
            console.log(`${index+1}.[${id}] ${nama} - Rp.${harga} (${status}]`)
        });
    },

    editharga : function ( updateData) {
        const index = this.data.findIndex(item => item.id === updateData.id);
        if(index === -1){
            console.log(`harga menu id ${id} tidak ditemukan`);
            return;
        }
        this.data[index] = {
            ...this.data[index],
            harga : updateData.harga
        };
        console.log(`harga menu id ${updateData} berhasil di update!`);
    },

    hapusbanyak : function (...ids) {
        ids.forEach(id => {
            let index = this.data.findIndex(item => item.id === id)
            if(index !== -1){
                let {nama} = this.data[index]  
                this.data.splice(index, 1)
                console.log(`berhasil ${nama} dihapus`)
            }
        })
    },

    salinmenu : function (...id) {
        if(id.length === 0){
            return [...this.data]
        }
        let dipilih = this.data.filter(item => id.includes(item.id))
        return [...dipilih]
}}


console.log("TESTING MENU MAKANAN");
menumakanan.tambahbanyak(
    { nama: "Nasi Goreng", harga: 25000 },
    { nama: "Mie Ayam", harga: 20000 },
    { nama: "Es Teh", harga: 5000 },
    { nama: "Ayam Bakar", harga: 35000 }
)
menumakanan.lihat()
console.log('\n');

menumakanan.editharga({id: 1, harga: 28000})
menumakanan.editharga({id: 3, harga: 6000})
menumakanan.hapusbanyak(2,4)
menumakanan.lihat()
console.log('\n');
const menubackup = menumakanan.salinmenu()
const menupilihan = menumakanan.salinmenu(1,3)
console.log("backup semua menu", menubackup)
console.log("menu pilihan",menupilihan)

 

 




