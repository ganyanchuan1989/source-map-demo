import React from "react";
import ReactDOM from "react-dom";
import TestLib from "../dist-lib/testLib.js";

function MainApp() {
  return (
    <div>
      this is Main app
      <TestLib></TestLib>
    </div>
  );
}
ReactDOM.render(<MainApp/>, document.getElementById("app"));
