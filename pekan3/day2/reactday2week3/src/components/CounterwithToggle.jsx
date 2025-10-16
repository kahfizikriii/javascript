import { useCounterWithToggle } from "../hooks/useCounterWithToggle";

export default function CounterWithToggle() {
  const { count, increment, decrement, reset, isVisible, toggleVisible } = useCounterWithToggle(0);

  return (
    <div>
      <button onClick={toggleVisible}>
        {isVisible ? "Sembunyikan Counter" : "Tampilkan Counter"}
      </button>
      {isVisible && (
        <div>
          <h2>Count: {count}</h2>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
        </div>
      )}
    </div>
  );
}
