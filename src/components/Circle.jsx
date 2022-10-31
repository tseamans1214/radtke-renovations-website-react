import React from "react";
import { useState, useEffect } from 'react';

function Circle({index, counter, setCounter}) {
    const [selected, setSelected] = useState(false);
    let color = "black";
    if (index == counter) {
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

  // function setCounter() {
  //   counter = index;
  // }
    return (
        <div style={circleStyle} onClick={() => setCounter(index)}></div>
    );
  }

  export default Circle;