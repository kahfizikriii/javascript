
export const subtotal = (daftarBelanja) => {
  return daftarBelanja.reduce((total, item) => total + item.harga * item.qty, 0);
};

export const pajak = (total, persen = 10) => {
  return total * (persen / 100);
};

export const diskon = (total, persen = 5) => {
  return total * (persen / 100);
};

export const kembalian = (bayar, totalBayar) => {
  return bayar - totalBayar;
};
