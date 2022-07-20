import { findByLabelText } from "@testing-library/react";
import React from "react";

function Section ({id, title, paragraph, list, color, backgroundColor}) {
    const sectionStyle = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        color: color,
        backgroundColor:  backgroundColor
    }
    return (
        <section id={id} style={sectionStyle}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <ul>
            </ul>
        </section>
    );
}

export default Section;