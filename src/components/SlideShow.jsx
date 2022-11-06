import React from "react";
import { useState, useEffect } from 'react';
import Circle from "./Circle";
import * as FileFunctions from "../FileFunctions.js";
// import Images from "../../public/images/before-after";

function SlideShow({dir, isBeforeAfter, currentImage, numImages}) {
    const contentStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
    const sectionStyle = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%"
    }
    const colStyle = {
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
        height: "auto"
    }
    const imageContainer = {
        position: "relative",
        width: "100%",
        height: "auto"
    }
    const imageStyle = {
        width: "100%",
        height: "auto"
    }
    const leftArrowStyle = {
        width: "15%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.0)",
        position: "absolute",
        left: "0%",
        top: "0%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "10em",
        color: "white"
    }

    const rightArrowStyle = {
        width: "15%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.0)",
        position: "absolute",
        right: "0%",
        top: "0%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "10em",
        color: "white"
    }

    const circleSectionStyle = {
        display: "flex",
        flexDirection: "row",
        padding: "20px"
    }

    //const numFiles = FileFunctions.getNumFiles(process.env.PUBLIC_URL + `/images/before-after`);

    const [counter, setCounter] = useState(currentImage);

    useEffect(() => {
        // setCounter(1);
        const interval = setInterval(() => {
            changeCount(1);
          }, 5000);
          return () => clearInterval(interval);
    }, [counter]);

    const changeCount = (amountChanged) => {
        if (counter + amountChanged == 0) {
            setCounter(numImages);
        } else if (counter + amountChanged == numImages + 1) {
            setCounter(1)
        } else {
            setCounter(counter + amountChanged);
        }
    };

    const circles = [];
    for (let i = 1; i<=numImages; i++) {
        circles.push(<Circle 
            index={i}
            counter={counter}
            setCounter={setCounter}
        />);
    }

    return (
        <div style={contentStyle}>
           {isBeforeAfter &&
                <section style={sectionStyle}>
                
                    <div className="col" style={colStyle}>
                        <h3>Before</h3>
                        <div style={imageContainer}>
                            <img  style={imageStyle} src={process.env.PUBLIC_URL + `/images/before-after/B${counter}.jpg`}></img>
                            <div className="arrow" style={leftArrowStyle} onClick={() => changeCount(-1)}>&#8678;</div>
                        
                        </div>
                    </div>
                    <div className="col" style={colStyle}>
                        <h3>After</h3>
                        <div style={imageContainer}>
                            <img style={imageStyle} src={process.env.PUBLIC_URL + `/images/before-after/A${counter}.jpg`}></img>
                            <div className="arrow" style={rightArrowStyle} onClick={() => changeCount(1)}>&#8680;</div>
                        </div>
                    </div>
                </section>
            }
            {isBeforeAfter === false &&
                <section style={sectionStyle}>
                    <div style={imageContainer}>
                            <img  style={imageStyle} src={process.env.PUBLIC_URL + `/images/gallery/P${counter}.jpg`}></img>
                            <div className="arrow" style={leftArrowStyle} onClick={() => changeCount(-1)}>&#8678;</div>
                            <div className="arrow" style={rightArrowStyle} onClick={() => changeCount(1)}>&#8680;</div>
                    </div>
                </section>
            }
            <div style={circleSectionStyle}>
                {circles}
            </div>
        </div>
        
    );
}

export default SlideShow;