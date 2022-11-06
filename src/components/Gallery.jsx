import React from "react";
import { useState, useEffect } from 'react';
import SlideShow from "./SlideShow";
import * as FileFunctions from "../FileFunctions.js";
import fs from 'fs';

function Gallery() {
    const [selected, setSelected] = useState(false);
    const [numFiles, setNumFiles] = useState(0);
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState(1);

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
    cursor: "pointer"
  };
  const popupStyle = {
    width: "100%",
    height: "100%",
    textAlign: "right",
    zIndex: "2",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)"
  };
  const closeButton = {
    width: "100%",
    padding: "30px",
    textAlign: "right",
    fontSize: "48px",
    color: "black"
  }
//   useEffect(() => {
//     //let result = FileFunctions.getNumFiles(process.env.PUBLIC_URL + `/images/gallery`);
//     //await RNFS.readDir()
//     let result = fs.readdirSync(process.env.PUBLIC_URL + `/images/gallery`);
//     setNumFiles(result.length);
//   }, []);

  const pics = [];
  for (let i = 1; i<=6; i++) {
    pics.push(<img  class="gallery-pic" style={picStyle} src={process.env.PUBLIC_URL + `/images/Gallery/P${i}.jpg`} onClick={() => {setPopUpVisible(true); setCurrentImage(i)}}></img>)
  }
    return (
        <div class="gallery" style={galleryStyle}>
            {popUpVisible &&
                <div id="gallery-popup" style={popupStyle}>
                    <a style={closeButton} href="#" onClick={() => setPopUpVisible(false)}>×</a>
                    <SlideShow
                        dir="/images/gallery/" 
                        isBeforeAfter={false}
                        currentImage={currentImage}
                        numImages={6}
                    />
                </div>
            }
            {/* <div id="gallery-popup" style={popupStyle}>
                <SlideShow />
            </div> */}
            <h3 style={galleryTitleStyle}>Check Out Our Past Work!</h3>
            <div style={galleryPicSectionStyle} class="gallery-pic-section">
                {pics}
            </div>
            
        </div>
    );
  }

  export default Gallery;