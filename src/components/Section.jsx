import { findByLabelText } from "@testing-library/react";
import React from "react";

function Section ({id, title, paragraph, list, color, backgroundColor, backgroundImage, children}) {
    const sectionStyle = {
        display: "flex",
        minHeight: "50vh",
        alignItems: "center",
        flexDirection: "column",
        color: color,
        backgroundColor:  backgroundColor
        // backgroundImage: `url("${backgroundImage}")`,
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center center",
        // backgroundSize: "cover"
    }
    return (
        <section id={id} style={sectionStyle}>
            
            {title &&
            <h2>{title}</h2>
            }
            {paragraph &&
            <p>{paragraph}</p>
            }
            {list && 
            <ul>
            </ul>
            }
            {children}
            
        </section>
    );
}

export default Section;