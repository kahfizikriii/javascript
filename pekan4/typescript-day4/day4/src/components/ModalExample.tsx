import React, { useState } from "react";
import ModalPortal from "./ModalPortal";

const ModalExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 border rounded-xl shadow-md m-4">
      <h2 className="text-xl font-semibold mb-2">React Portal Modal</h2>
      <button
        onClick={() => setOpen(true)}
        className="bg-indigo-500 text-white px-3 py-1 rounded"
      >
        Buka Modal
      </button>

      {open && (
        <ModalPortal>
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-lg font-semibold mb-2">Ini Modal Portal!</h3>
              <p className="text-sm text-gray-600 mb-4">
                Modal ini di-render di luar root utama.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Tutup Modal
              </button>
            </div>
          </div>
        </ModalPortal>
      )}
    </div>
  );
};

export default ModalExample;
