import React from "react";

function Service({title, backgroundImage}) {

  const serviceStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    minHeight: "130px",
    height: "40%",
    background: `url("${backgroundImage}"), rgba(22, 22, 22, 0.33)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
    border: "1px solid black",
    textAlign: "center",
    color: "white"
  }
  const serviceTitleStyle = {
    fontSize: "3em",
    marginTop: "50"
  }
    return (
        <div className="service" style={serviceStyle}>
            <h3 style={serviceTitleStyle}>{title}</h3>
        </div>
    );
  }

  export default Service;