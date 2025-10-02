import React from "react";
import ProfileCard from "./components/profilecard";
import DiscountPrice from "./components/discount";
import LoginMessage from "./components/login";
import FruitList from "./components/fruit";

export default function App() {
  const skills = ["React", "JavaScript", "CSS", "HTML"];
  const fruits = ["Apel", "Jeruk", "Mangga", "Pisang"];

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Evaluasi Harian</h1>

      {/* ProfileCard */}
      <ProfileCard
        name="Muhammad Al Kahfi Zikri"
        photo="fi.png"
        bio="Santri Rumah IT."
        skills={skills}
      />

      <hr />

      {/* DiscountPrice */}
      <DiscountPrice price={100000} discount={20} />

      <hr />

      {/* Conditional Rendering */}
      <LoginMessage isLoggedIn={true} messages={["Pesan 1", "Pesan 2"]} />

      <hr />

      {/* FruitList */}
      <FruitList fruits={fruits} />
    </div>
  );
}
