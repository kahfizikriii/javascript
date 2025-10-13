export const scaleNames = {
  c: "Celsius",
  k: "Kelvin",
};

export function toKelvin(celsius) {
  return celsius + 273.15;
}

export function toCelsius(kelvin) {
  return kelvin - 273.15;
}

export function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}