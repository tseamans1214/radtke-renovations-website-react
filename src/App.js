import React from "react";
import Circle from "./components/Circle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import Service from "./components/Service";
import SlideShow from "./components/SlideShow";

function App() {
  const bodyStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    margin: "0"
  }
  const titleSectionStyle = {
    textAlign: "center",
    marginTop: "12%"
  }
  const contactButtonStyle = {
    display: "inline-block",
    padding: "0px",
    margin: "0px",
    // backgroundColor: "white",
    color: "white",
    // border: "2px solid black",
    borderRadius: "10px"
  }
  const servicesStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    minHeight: "100%"
  }
  const missionSectionStyle = {
    padding: "20px 60px 20px 60px",
    textAlign: "center"
  }
  const missionListStyle = {
    textAlign: "left"
  }
  const contactSectionStyle = {
    textAlign: "center"
  }
  return (
    <div style={bodyStyle} className="App">
      <Header />
      <Section 
        id="top-section"
        // title="Turn your home into your dream home!"
        // paragraph="Contact us today!"
        color="white"
        children={
          <div style={titleSectionStyle}>
            <h1>Turn Your home into your dream home!</h1>
            <div style={contactButtonStyle}>
              <h2>Contact us TODAY!</h2>
              <h3>602-705-6625</h3>
            </div>
          </div>
        }
      />
      <Section 
        id="about-section"
        title="Who We Are"
        paragraph="We are a local Arizona renovation company that prides on providing professional service to customers."
        color="white"
        backgroundColor="black"
        backgroundImage="../../public/images/gallery/P3.jpg"
        children={
          <div style={missionSectionStyle}>
            <h3>Our Mission</h3>
              <ul style={missionListStyle}>
                <li>To perform for our customers the highest level of quality construction services at fair market competative prices.</li>
                <li>To maintain the highest levels of professionalism, integrity, honesty and fairness with our suppliers, subcontractors, professional associates and customers.</li>
                <li>To become the leading construction firm, while delivering projects that consistantly exceeds international standards and provide exceptional customer satisfaction</li>
                <li>To continually devliver excellent value and innavative construction solutions to meet our clients requirements.</li>
              </ul>
          </div>
        }
      />
      <Section 
        id="services-section"
        title="How We Can Help"
        paragraph="We provide a wide range of services to fit your needs with the main ones listed below. Contact us today for any questions!"
        color="black"
        backgroundColor="white"
        backgroundImage="../../public/images/gallery/P3.jpg"
        children={
          <div style={servicesStyle}>
            <Service
              title="Residential"
              backgroundImage="/images/stock/residential.jpg" />
            <Service
              title="Commercial"
              backgroundImage="/images/stock/commercial.jpg" />
            <Service
              title="New Construction"
              backgroundImage="/images/stock/construction.jpg" />
            <Service
              title="Renovations"
              backgroundImage="/images/stock/renovation.jpg" />
              <Service
              title="Remodels"
              backgroundImage="/images/stock/remodel.jpg" />
            <Service
              title="Handyman Services"
              backgroundImage="/images/stock/handyman.jpg" />
            <Service
              title="Building Maintenance"
              backgroundImage="/images/stock/maintenance.jpg" />
            <Service
              title="And More!"
              backgroundImage="/images/logo/logo-small.png"
              />
          </div>
        }
      />
      <Section 
        id="past-work-section"
        title="Check Out Our Past Work!"
        color="white"
        backgroundColor="black"
        children={<SlideShow />}
      />
      <Section 
        id="contact-section"
        title="Contact Us!"
        paragraph="Easily get a hold of us by our phone number or email!"
        color="black"
        backgroundColor="white"
        backgroundImage="../../public/images/gallery/P3.jpg"
        children={
          <div style={contactSectionStyle}>
            <h3>Owner: Tyson Radtke</h3>
            <p>Phone Number: <strong>602-705-6625</strong></p>
            <p>Email: <strong>Tyson@Radrenosllc.com</strong></p>
          </div>
        }
      />
      <Footer 
        color="white"
        backgroundColor="black"
      />
    </div>
  );
}

export default App;
