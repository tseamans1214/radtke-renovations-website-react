import React from "react";


function Header({setGalleryVisible}) {
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
    maxWidth: "100%",
    height: "auto",
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

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("root").style.marginLeft = "250px";
    // document.getElementById("nav-button").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("root").style.marginLeft= "0";
    // document.getElementById("nav-button").style.display = "block";
  }

    return (
        <header className="header" style={headerStyle}>
          <a style={logoAreaStyle} href="#header" onClick={() => setGalleryVisible(false)}>
            <img style={logoStyle} src="images/logo/logo.png" alt="Radtke Renovations LLC"></img>
            <div style={logoStyle}>
              <h1>Radtke Renovations LLC</h1>
              <h2>Local Arizona Contractor</h2>
            </div>
          </a>
          <nav style={navStyle}>
            <a className="hide hide1" href="#header" onClick={() => setGalleryVisible(false)}>Home</a>
            <a className="hide hide2" href="#about-section" onClick={() => setGalleryVisible(false)}>About</a>
            <a className="hide" href="#services-section" onClick={() => setGalleryVisible(false)}>Services</a>
            <a className="hide" href="#gallery" onClick={() => setGalleryVisible(true)}>Gallery</a>
            <a className="hide" href="#contact-section" onClick={() => setGalleryVisible(false)}>Contact</a>
            <div id="nav-button" className="nav-button" onClick={openNav}>☰</div>
          </nav>
          <div id="mySidebar" className="sidebar">
            <a href="#" className="closebtn" onClick={closeNav}>×</a>
            <a href="#header" onClick={() => {setGalleryVisible(false); closeNav();}}>Home</a>
            <a href="#about-section" onClick={() => {setGalleryVisible(false); closeNav();}}>About</a>
            <a href="#services-section" onClick={() => {setGalleryVisible(false); closeNav();}}>Services</a>
            <a href="#gallery" onClick={() => {setGalleryVisible(true); closeNav();}}>Gallery</a>
            <a href="#contact-section" onClick={() => {setGalleryVisible(false); closeNav();}}>Contact</a>
          </div>
      </header>
    );
  }


  export default Header;