import { findByLabelText } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from 'react';

function Service({title, backgroundImage}) {
    const [selected, setSelected] = useState(false);

  const serviceStyle = {
    // display: "inline-block",
    // width: "25%",
    // height: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    minHeight: "25%",
    height: "25%",
    background: `url("${backgroundImage}"), rgba(22, 22, 22, 0.33)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
    textAlign: "center",
    color: "white"
  }
  const serviceTitleStyle = {
    marginTop: "50"
  }
    return (
        <div class="service" style={serviceStyle}>
            <h3 style={serviceTitleStyle}>{title}</h3>
        </div>
    );
  }

  export default Service;