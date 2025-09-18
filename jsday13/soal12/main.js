
import { cerahkan, gelapkan, grayscale, frameKlasik } from './foto/index.js';

const fotoAlbum = [
    { nama: "foto1" },
    { nama: "foto2" },
    { nama: "foto3" }
];

const hasilEdit = fotoAlbum.map((f, i) => {
    if (i === 0) return cerahkan(f);       
    if (i === 1) return gelapkan(f);       
    if (i === 2) return frameKlasik(f);    
});

const hasilGrayscale = hasilEdit.map(f => grayscale(f));

console.log("Hasil Edit:", hasilEdit);
console.log("Hasil Grayscale:", hasilGrayscale);
