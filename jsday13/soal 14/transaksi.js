
import { Kalkulasi, subtotal, pajak, diskon, kembalian } from './hitung/index.js';

export const prosesTransaksi = (daftarBelanja, bayar) => {

  const total = Kalkulasi.subtotal(daftarBelanja);
  const ppn = pajak(total, 10);
  const potongan = diskon(total, 5);
  const totalBayar = total + ppn - potongan;
  const kembali = kembalian(bayar, totalBayar);

  return {
    total, ppn, potongan, totalBayar, bayar, kembali
  };
};
