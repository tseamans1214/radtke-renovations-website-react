import React from "react";
import { useState} from 'react';
import SlideShow from "./SlideShow";

function Gallery() {
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
    backgroundColor: "black"
  };
  const closeButton = {
    width: "100%",
    padding: "30px",
    textAlign: "right",
    fontSize: "48px",
    color: "white",
  }
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const imageDirs = importAll(require.context('../../public/images/gallery', false, /\.(png|jpe?g|svg)$/));

  const pics = [];
// Old way
//   for (let i = 1; i<=6; i++) {
//     pics.push(<img  class="gallery-pic" style={picStyle} src={process.env.PUBLIC_URL + `/images/gallery/P${i}.jpg`} onClick={() => {setPopUpVisible(true); setCurrentImage(i)}}></img>)
//   }
  let i = 1;
  Object.values(imageDirs).forEach((image) => {
    let currentNum = i;
    pics.push(<img  className="gallery-pic" style={picStyle} src={image} onClick={() => {setPopUpVisible(true); setCurrentImage(currentNum)}}></img>)
    i++;
  });
    return (
        <div id="gallery" className="gallery" style={galleryStyle}>
            {popUpVisible &&
                <div id="gallery-popup" style={popupStyle}>
                    <a style={closeButton} href="#" onClick={() => setPopUpVisible(false)}>×</a>
                    <SlideShow
                        dir="/images/gallery/" 
                        isBeforeAfter={false}
                        currentImage={currentImage}
                        numImages={Object.values(imageDirs).length}
                    />
                </div>
            }
            <h3 style={galleryTitleStyle}>Check Out Our Past Work!</h3>
            <a style={galleryPicSectionStyle} className="gallery-pic-section" href="#gallery-popup">
                {pics}
            </a>
            
        </div>
    );
  }

  export default Gallery;