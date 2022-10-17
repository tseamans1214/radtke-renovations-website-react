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
  const servicesStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    minHeight: "100%"
  }
  return (
    <div style={bodyStyle} className="App">
      <Header />
      <Section 
        id="top-section"
        title="title"
        paragraph="Hello this paragraph"
        color="black"
      />
      <Section 
        id="about-section"
        title="Who We Are"
        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem numquam dignissimos atque tempora officia modi et nam possimus distinctio nostrum? Officiis sequi ipsa laboriosam omnis asperiores atque vero tempore provident!"
        color="white"
        backgroundColor="gray"
        backgroundImage="../../public/images/gallery/P3.jpg"
        children={
          <div>
            <h3>Mission</h3>
              <ul>
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
        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem numquam dignissimos atque tempora officia modi et nam possimus distinctio nostrum? Officiis sequi ipsa laboriosam omnis asperiores atque vero tempore provident!"
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
              />
          </div>
        }
      />
      <Section 
        id="past-work-section"
        title="Check Out Our Past Work!"
        color="black"
        backgroundColor="gray"
        children={<SlideShow />}
      />
      <Section 
        id="contact-section"
        title="Contact Us!"
        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem numquam dignissimos atque tempora officia modi et nam possimus distinctio nostrum? Officiis sequi ipsa laboriosam omnis asperiores atque vero tempore provident!"
        color="black"
        backgroundColor="white"
        backgroundImage="../../public/images/gallery/P3.jpg"
      />
      <Footer 
        color="white"
        backgroundColor="black"
      />
    </div>
  );
}

export default App;
