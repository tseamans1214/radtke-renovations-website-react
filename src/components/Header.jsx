import React from "react";


function Header() {
  const headerStyle = {
    display: "flex",
    width: "100%",
    height: "15vh",
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
    height: "100%"
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
        <header style={headerStyle}>
          <a style={logoAreaStyle} href="#">
            <img style={logoStyle} src="images/logo/logo.png" alt="Radtke Renovations LLC"></img>
            <div style={logoStyle}>
              <h1>Radtke Renovations LLC</h1>
              <h2>Local Arizona Contractor</h2>
            </div>
          </a>
          <nav style={navStyle}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Gallery</a>
            <a href="#">Contract</a>
          </nav>
      </header>
    );
  }


  export default Header;