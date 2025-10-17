import React from "react";

const ChildMemo = React.memo(({ count }) => {
  console.log("ChildMemo dirender ulang ");
  return <h3>Nilai dari Parent: {count}</h3>;
});

export default ChildMemo;
