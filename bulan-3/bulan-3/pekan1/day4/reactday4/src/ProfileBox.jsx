// src/ProfileBox.jsx
import React from "react";

export default function ProfileBox() {
  const boxStyle = {
    border: "2px solid #333",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#f5f5f5",
    margin: "10px",
    width: "250px",
  };

  const nameStyle = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const bioStyle = {
    color: "gray",
    fontStyle: "italic",
  };

  return (
    <div style={boxStyle}>
      <h2 style={nameStyle}>muhammad Al Kahfi Zikri</h2>
      <p style={bioStyle}>belajar javascript React</p>
    </div>
  );
}
