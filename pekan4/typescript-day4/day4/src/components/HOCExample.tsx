import React, { useState } from "react";
import { withLoading } from "./withLoading";

const DataComponent: React.FC = () => {
  return <p>✅ Data berhasil dimuat!</p>;
};

const EnhancedComponent = withLoading(DataComponent);

const HOCExample: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="p-4 border rounded-xl shadow-md m-4">
      <h2 className="text-xl font-semibold mb-2">Custom HOC Example</h2>
      <button
        onClick={() => setLoading(!loading)}
        className="bg-blue-600 text-white px-3 py-1 rounded mb-2"
      >
        Toggle Loading
      </button>
      <EnhancedComponent loading={loading} />
    </div>
  );
};

export default HOCExample;
