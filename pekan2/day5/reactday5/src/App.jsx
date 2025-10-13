import { TemperatureCalculator } from "./components/TemperatureCalculator";
import { PropDrillingExample } from "./components/PropDrillingExample";
import { SharedStateExample } from "./components/SharedStateExample";
import { ReducerCounter } from "./components/ReducerCounter";
import { ContextExample } from "./components/ContextExample";

export default function App() {
  return (
    <div>
      <TemperatureCalculator />
      <hr />
      <PropDrillingExample />
      <hr />
      <SharedStateExample />
      <hr />
      <ReducerCounter />
      <hr />
      <ContextExample />
    </div>
  );
}
