import React from "react";
import { useState, useEffect } from 'react';
// import Images from "../../public/images/before-after";

function SlideShow() {
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
    const imageStyle = {
        width: "100%",
        height: "auto"
    }
    const leftArrowStyle = {
        width: "15%",
        height: "15%",
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "absolute",
        left: "0%",
        top: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "10em",
        color: "white"
    }

    const rightArrowStyle = {
        width: "15%",
        height: "15%",
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "absolute",
        right: "0%",
        top: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "10em",
        color: "white"
    }

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        
        setCounter(1);
    }, []);

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
    
        <section style={sectionStyle}>
            <div className="col" style={colStyle}>
                <h3>Before</h3>
                <img style={imageStyle} src={process.env.PUBLIC_URL + `/images/before-after/B${counter}.jpg`}></img>
                <div className="arrow" style={leftArrowStyle} onClick={() => changeCount(-1)}>&#8678;</div>
            </div>
            <div className="col" style={colStyle}>
                <h3>After</h3>
                <img style={imageStyle} src={process.env.PUBLIC_URL + `/images/before-after/A${counter}.jpg`}></img>
                <div className="arrow" style={rightArrowStyle} onClick={() => changeCount(1)}>&#8680;</div>
            </div>
        </section>
    );
}

export default SlideShow;