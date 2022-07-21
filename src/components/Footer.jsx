import React from "react";

function Footer({color, backgroundColor}) {
  const footerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "10vh",
    color: color,
    backgroundColor: backgroundColor
  }
    return (
        <footer style={footerStyle}>
          <span>Copyright &copy; 2022 Radtke Renovations LLC</span>
        </footer>
    );
  }

  export default Footer;