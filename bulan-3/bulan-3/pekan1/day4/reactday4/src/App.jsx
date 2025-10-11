// src/App.jsx
import React from "react";
import ProfileBox from "./ProfileBox";
import ProfileCard from "./ProfileCard";
import ButtonExample from "./Button";
import AlertBox from "./AlertBox";
import ResponsiveBox from "./ResponsiveBox";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1> Styling di React </h1>

      <h2>Soal 1</h2>
      <ProfileBox />

      <h2>Soal 2</h2>
      <ProfileCard />

      <h2>Soal 3</h2>
      <ButtonExample />

      <h2>Soal 4</h2>
      <AlertBox />

      <h2>Soal 5</h2>
      <ResponsiveBox />
    </div>
  );
}
