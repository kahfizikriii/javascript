import { useCounter } from "./useCounter";
import { useToggle } from "./useToggle";

export function useCounterWithToggle(initialValue = 0) {
  const counter = useCounter(initialValue);
  const [isVisible, toggleVisible] = useToggle(true);

  return { ...counter, isVisible, toggleVisible };
}
