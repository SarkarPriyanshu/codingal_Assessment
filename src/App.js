import React from "react";
import { connect } from "react-redux";
import Navbar from "./Components/Navbar/Navbar";
import Model from "./Components/Model/Model";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Model */}
      <Model />
    </div>
  );
}

export default connect(null)(App);
