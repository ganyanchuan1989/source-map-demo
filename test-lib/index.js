import React from "react";
function throwError() {
  throw new Error("报错了");
}

export default function App() {
  return (
    <div>
      <button onClick={throwError}>error</button>
    </div>
  );
}
