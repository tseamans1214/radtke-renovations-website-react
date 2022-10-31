import React from "react";
import { useState, useEffect } from 'react';
import Circle from "./Circle";
// import Images from "../../public/images/before-after";

function SlideShow() {
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

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        // setCounter(1);
        const interval = setInterval(() => {
            changeCount(1);
          }, 5000);
          return () => clearInterval(interval);
    }, [counter]);

    const changeCount = (amountChanged) => {
        if (counter + amountChanged == 0) {
            setCounter(5);
        } else if (counter + amountChanged == 6) {
            setCounter(1)
        } else {
            setCounter(counter + amountChanged);
        }
    };

    return (
        <div style={contentStyle}>
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
            <div style={circleSectionStyle}>
                <Circle 
                    index={1}
                    counter={counter}
                    setCounter={setCounter}
                />
                <Circle 
                    index={2}
                    counter={counter}
                    setCounter={setCounter}
                />
                <Circle 
                    index={3}
                    counter={counter}
                    setCounter={setCounter}
                />
                <Circle 
                    index={4}
                    counter={counter}
                    setCounter={setCounter}
                />
                <Circle 
                    index={5}
                    counter={counter}
                    setCounter={setCounter}
                />
            </div>
        </div>
        
    );
}

export default SlideShow;