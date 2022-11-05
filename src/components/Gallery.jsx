import React from "react";
import { useState, useEffect } from 'react';
import SlideShow from "./SlideShow";
import * as FileFunctions from "../FileFunctions.js";

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
  const popupStyle = {
    width: "100%",
    height: "100%",
    zIndex: "2",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)"
  };
  const numFiles = FileFunctions.getNumFiles(process.env.PUBLIC_URL + `/images/Gallery`);
  const pics = [];
  for (let i = 1; i<=numFiles; i++) {
    pics.push(<img  class="gallery-pic" style={picStyle} src={process.env.PUBLIC_URL + `/images/Gallery/P${i}.jpg`}></img>)
  }
    return (
        <div class="gallery" style={galleryStyle}>
            <div id="gallery-popup" style={popupStyle}>
                <SlideShow />
            </div>
            <h3 style={galleryTitleStyle}>Check Out Our Past Work!</h3>
            <div style={galleryPicSectionStyle} class="gallery-pic-section">
                {pics}
            </div>
            
        </div>
    );
  }

  export default Gallery;