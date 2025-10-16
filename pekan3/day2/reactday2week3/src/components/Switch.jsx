import { useToggle } from "../hooks/useToggle";

export default function Switch() {
  const [isOn, toggleOn] = useToggle(false);

  return (
    <div>
      <button onClick={toggleOn}>
        {isOn ? "Switch ON 🔆" : "Switch OFF 🌙"}
      </button>
    </div>
  );
}
