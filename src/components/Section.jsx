import { findByLabelText } from "@testing-library/react";
import React from "react";

function Section ({id, title, paragraph, list, color, backgroundColor, backgroundImage, children}) {
    const sectionStyle = {
        display: "flex",
        // minHeight: "50vh",
        paddingTop: "20px",
        // paddingBottom: "20px",
        alignItems: "center",
        flexDirection: "column",
        color: color,
        backgroundColor:  backgroundColor
        // backgroundImage: `url("${backgroundImage}")`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center center",
        // backgroundSize: "cover"
    }
    const childrenStyle = {
        width: "100%",
        // height: "600px",
        maxHeight: "100%"
    }
    const paragraphStyle = {
        padding: "20px"
    }
    return (
        <section id={id} style={sectionStyle}>
            
            {title &&
            <h2>{title}</h2>
            }
            {paragraph &&
            <p style={paragraphStyle} >{paragraph}</p>
            }
            {list && 
            <ul>
            </ul>
            }
            <div style={childrenStyle}>
                {children}
            </div>
            
        </section>
    );
}

export default Section;