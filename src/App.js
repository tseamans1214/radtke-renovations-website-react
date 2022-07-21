import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import SlideShow from "./components/SlideShow";

function App() {
  const bodyStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "black"
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
      />
      <Section 
        id="services-section"
        title="How We Can Help"
        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem numquam dignissimos atque tempora officia modi et nam possimus distinctio nostrum? Officiis sequi ipsa laboriosam omnis asperiores atque vero tempore provident!"
        color="black"
        backgroundColor="white"
        backgroundImage="../../public/images/gallery/P3.jpg"
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
