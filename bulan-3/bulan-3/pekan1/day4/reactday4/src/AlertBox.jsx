// src/AlertBox.jsx
import React from "react";
import styled from "styled-components";

const Alert = styled.div`
  padding: 16px;
  border-radius: 8px;
  margin: 10px 0;
  font-weight: bold;
  color: white;

  ${(props) =>
    props.type === "success" &&
    `
    background-color: green;
  `}

  ${(props) =>
    props.type === "error" &&
    `
    background-color: red;
  `}
`;

export default function AlertBox() {
  return (
    <div>
      <Alert type="success"> Berhasil disimpan!</Alert>
      <Alert type="error"> Terjadi kesalahan!</Alert>
    </div>
  );
}
