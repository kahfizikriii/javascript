import React, { useRef } from "react";

const UseRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus(); // Fokus ke input
  };

  const handleChangeColor = () => {
    if (inputRef.current) {
      inputRef.current.style.backgroundColor = "lightblue";
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md m-4">
      <h2 className="text-xl font-semibold mb-2">useRef Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ketik sesuatu..."
        className="border p-2 rounded w-full mb-2"
      />
      <div className="flex gap-2">
        <button
          onClick={handleFocus}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Fokus ke Input
        </button>
        <button
          onClick={handleChangeColor}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Ubah Warna Input
        </button>
      </div>
    </div>
  );
};

export default UseRefExample;
