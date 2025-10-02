import React from "react";

function FruitList({ fruits }) {
  return (
    <div>
      <h3>Daftar Buah:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}> {fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
