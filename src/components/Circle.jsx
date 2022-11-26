import React from "react";

function Circle({index, counter, setCounter}) {
    let color = "black";
    if (index === counter) {
      color = "white";
    } else {
      color = "black";
    }

  const circleStyle = {
    width: "25px",
    height: "25px",
    marginRight: "15px",
    backgroundColor: color,
    border: "2px solid white",
    borderRadius: "15px",
    cursor: "pointer",
    transition: "background-color 0.8s ease"
  }
    return (
        <div style={circleStyle} onClick={() => setCounter(index)}></div>
    );
  }

  export default Circle;