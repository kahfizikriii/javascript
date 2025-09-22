
import { toJSON, toObject } from "./konversi.js";

const produk = { id: 1, nama: "Laptop", harga: 7500000 };

const jsonData = toJSON(produk);
console.log("JSON:", jsonData);

const objData = toObject(jsonData);
console.log("Object:", objData);
