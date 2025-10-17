import React from "react";

const CallbackChild = React.memo(({ onClick }) => {
  console.log(" CallbackChild dirender ulang");
  return <button onClick={onClick}>Tambah Nilai</button>;
});

export default CallbackChild;
