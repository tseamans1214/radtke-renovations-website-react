import React from "react";
import { useState, useEffect } from 'react';

function Gallery() {
    const [selected, setSelected] = useState(false);

  const galleryStyle = {
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "column",
    margin: "0px",
    padding: "0px"
  }
  const galleryTitleStyle = {
    marginTop: "20px",
    marginBottom: "20px",
    color: "black",
    backgroundColor: "white",
    paddingTop: "8px",
    paddingBottom: "8px",
    borderTop: "2px solid black",
    borderBottom: "2px solid black"
  };
  const galleryPicSectionStyle = {
    margin: "0px",
    padding: "0px"
  };
  const picStyle = {
    width: "33.333%",
    height: "auto",
    padding: "0",
    margin: "0",
  };
  const pics = [];
  for (let i = 1; i<=6; i++) {
    pics.push(<img  style={picStyle} src={process.env.PUBLIC_URL + `/images/Gallery/P${i}.jpg`}></img>)
  }
    return (
        <div class="gallery" style={galleryStyle}>
            <h3 style={galleryTitleStyle}>Check Out Our Past Work!</h3>
            <div style={galleryPicSectionStyle} class="gallery-pic-section">
                {pics}
            </div>
        </div>
    );
  }

  export default Gallery;