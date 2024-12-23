import { useState } from "react";

import "./App.css";
import LineGraph from "./components/LineGraph/LineGraph";
import BarGraph from "./components/BarGraph/BarGraph";

function App() {
  return <>
    <LineGraph />
    <BarGraph/>
  </>;
}

export default App;
