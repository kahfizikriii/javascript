import React from "react";
import Toggle from "./Toogle";
import MouseTracker from "./MouseTracker";

const RenderPropsExample: React.FC = () => {
  return (
    <div className="p-4 border rounded-xl shadow-md m-4">
      <h2 className="text-xl font-semibold mb-3">Render Props Example</h2>

      {/* ✅ Implementasi 1: Toggle Text */}
      <Toggle>
        {(on, toggle) => (
          <div className="mb-3">
            <button
              onClick={toggle}
              className="bg-teal-500 text-white px-3 py-1 rounded"
            >
              {on ? "Sembunyikan" : "Tampilkan"} Pesan
            </button>
            {on && <p className="mt-2">Halo! 👋 Ini contoh Render Props.</p>}
          </div>
        )}
      </Toggle>

      {/* ✅ Implementasi 2: Toggle Warna */}
      <Toggle>
        {(on, toggle) => (
          <div
            onClick={toggle}
            className={`p-4 text-center cursor-pointer rounded mb-3 transition-all duration-300 ${
              on ? "bg-green-300" : "bg-gray-200"
            }`}
          >
            Klik untuk ubah warna ({on ? "Hijau" : "Abu-abu"})
          </div>
        )}
      </Toggle>

      {/* ✅ Implementasi 3: Mouse Tracker */}
      <div className="mt-4 p-3 border-t border-gray-300">
        <h3 className="font-medium mb-2">Mouse Tracker 🐭</h3>
        <MouseTracker>
          {(pos) => (
            <div className="text-sm text-gray-700">
              Posisi Mouse: <b>X:</b> {pos.x}, <b>Y:</b> {pos.y}
              <div
                className="w-6 h-6 bg-blue-500 rounded-full mt-3 transition-all duration-75"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                  position: "fixed",
                  top: 0,
                  left: 0,
                  pointerEvents: "none",
                }}
              />
            </div>
          )}
        </MouseTracker>
      </div>
    </div>
  );
};

export default RenderPropsExample;
