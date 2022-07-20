import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  const bodyStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  }
  return (
    <div style={bodyStyle} className="App">
      <Header />
      <Section id="id" title="title" paragraph="Hello this paragraph" color="pink" backgroundColor="black"/>
    </div>
  );
}

export default App;
