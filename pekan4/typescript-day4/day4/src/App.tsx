import React from "react";
import UseRefExample from "./components/UseReffExample";
import ModalExample from "./components/ModalExample";
import HOCExample from "./components/HOCExample";
import RenderPropsExample from "./components/renderprops/RenderPropsExample";

const App: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <UseRefExample />
      <ModalExample />
      <HOCExample />
      <RenderPropsExample />
    </div>
  );
};

export default App;
