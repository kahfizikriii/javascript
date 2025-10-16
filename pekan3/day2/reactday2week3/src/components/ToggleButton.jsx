import { useToggle } from "../hooks/useToggle";

export default function ToggleButton() {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Tutup Modal" : "Buka Modal"}
      </button>
      {isOpen && <p>Modal terbuka 🎉</p>}
    </div>
  );
}
