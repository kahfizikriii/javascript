import React, { useState, useEffect } from "react";

interface MouseTrackerProps {
  children: (pos: { x: number; y: number }) => React.ReactNode;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <>{children(position)}</>;
};

export default MouseTracker;
