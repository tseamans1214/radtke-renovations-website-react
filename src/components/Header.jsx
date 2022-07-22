import React from "react";


function Header() {
  const headerStyle = {
    display: "flex",
    width: "100%",
    height: "10vh",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "black",
    color: "white",
    textDecoration: "none"
  };

  const logoAreaStyle = {
    display: "flex",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    color: "white",
    textDecoration: "none"
  }
  const logoStyle = {
    width: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }

  const navStyle = {
    display: "flex",
    width: "33%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    textDecoration: "none"
  }

    return (
        <header class="header" style={headerStyle}>
          <a style={logoAreaStyle} href="#header">
            <img style={logoStyle} src="images/logo/logo.png" alt="Radtke Renovations LLC"></img>
            <div style={logoStyle}>
              <h1>Radtke Renovations LLC</h1>
              <h2>Local Arizona Contractor</h2>
            </div>
          </a>
          <nav style={navStyle}>
            <a href="#header">Home</a>
            <a href="#about-section">About</a>
            <a href="#services-section">Services</a>
            <a href="#">Gallery</a>
            <a href="#contact-section">Contact</a>
          </nav>
      </header>
    );
  }


  export default Header;