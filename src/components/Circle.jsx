import React from "react";
import { useState, useEffect } from 'react';

function Circle({index}) {
  const circleStyle = {
    width: "25px",
    height: "25px",
    marginRight: "5px",
    backgroundColor: "black",
    border: "2px solid white",
    borderRadius: "15px"
  }
    return (
        <div style={circleStyle}></div>
    );
  }

  export default Circle;