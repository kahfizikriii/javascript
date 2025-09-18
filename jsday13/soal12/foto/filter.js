
export const cerahkan = (foto) => ({ ...foto, brightness: (foto.brightness ?? 0) + 20 });
export const gelapkan = (foto) => ({ ...foto, brightness: (foto.brightness ?? 0) - 20 });
export const grayscale = (foto) => ({ ...foto, mode: "grayscale" });

export default function tambahFrame(foto) {
    return { ...foto, frame: "classic" };
}
