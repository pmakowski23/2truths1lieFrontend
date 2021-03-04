import React from "react";
import { render } from "react-dom";
import Dashboard from "./pages/dashboard";

function App() {
  return <Dashboard />;
}

render(<App />, document.getElementById("root"));
