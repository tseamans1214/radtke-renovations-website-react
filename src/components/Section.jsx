import { findByLabelText } from "@testing-library/react";
import React from "react";

function Section ({id, title, paragraph, list, color, backgroundColor, backgroundImage, children}) {
    let sectionStyle;
    if (backgroundImage != null) {
        sectionStyle = {
            display: "flex",
            // minHeight: "50vh",
            paddingTop: "20px",
            // paddingBottom: "20px",
            alignItems: "center",
            flexDirection: "column",
            color: color,
            backgroundColor:  backgroundColor,
            background: `url("${backgroundImage}"), rgba(22, 22, 22, 0.33)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay"
        }
    } else {
        sectionStyle = {
            display: "flex",
            // minHeight: "50vh",
            paddingTop: "20px",
            // paddingBottom: "20px",
            alignItems: "center",
            flexDirection: "column",
            color: color,
            backgroundColor:  backgroundColor
        }
    } 
    const childrenStyle = {
        width: "100%",
        // height: "600px",
        maxHeight: "100%"
    }
    const titleStyle = {
        paddingTop: "8px",
        paddingBottom: "8px",
        borderTop: "2px solid " + color,
        borderBottom: "2px solid " + color
    }
    const paragraphStyle = {
        padding: "5px 10px 5px 10px",
        textAlign: "center"
    }
    
    return (
        <section id={id} style={sectionStyle}>
            
            {title &&
            <h2 style={titleStyle}>{title}</h2>
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