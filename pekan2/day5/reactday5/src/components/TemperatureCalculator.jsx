// Contoh tambahan - Lifting State Up untuk Kalkulator Suhu
import { useState } from "react";
import {
  scaleNames,
  toCelsius,
  toKelvin,
  tryConvert,
} from "../utils/temperatureUtils";

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Masukkan suhu dalam {scaleNames[scale]}:</legend>
      <input type="number" value={temperature} onChange={handleChange} />
    </fieldset>
  );
}

export function TemperatureCalculator() {
  const [state, setState] = useState({ temperature: "", scale: "c" });

  const handleCelsiusChange = (temperature) => {
    setState({ scale: "c", temperature });
  };

  const handleKelvinChange = (temperature) => {
    setState({ scale: "k", temperature });
  };

  const scale = state.scale;
  const temperature = state.temperature;
  const celsius = scale === "k" ? tryConvert(temperature, toCelsius) : temperature;
  const kelvin = scale === "c" ? tryConvert(temperature, toKelvin) : temperature;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Kalkulator Suhu (Celsius & Kelvin)</h2>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="k"
        temperature={kelvin}
        onTemperatureChange={handleKelvinChange}
      />
    </div>
  );
}