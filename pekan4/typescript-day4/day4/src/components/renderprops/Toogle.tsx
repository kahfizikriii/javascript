import React, { useState } from "react";

interface ToggleProps {
  children: (on: boolean, toggle: () => void) => React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return <>{children(on, toggle)}</>;
};

export default Toggle;
