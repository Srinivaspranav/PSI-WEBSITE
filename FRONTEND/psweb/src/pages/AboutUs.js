import React from 'react';
import '../Style/AboutUs.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../Style/scrollbar.css'



const AboutUs = () => (
  <div className="app">
    {/* NavBar */}
    <NavBar />

    {/* Image1 */}
    <div className="imageSection">
      <img className="image1" src="https://via.placeholder.com/1200x400" alt="About Us Banner" />
    </div>


    {/* AboutSection */}
    <div className="aboutSection">
      <div className="aboutContent">
        <h1 className="introductionHeading">Who are we?</h1>
        <p className="introductionContent">
          Welcome to Dr. Palamsetty Innovations, where we are dedicated to empowering students in their academic journey and beyond. Founded with a passion for education and innovation, we strive to provide comprehensive support to students, helping them excel in their studies and prepare for successful careers.
        </p>
        <p className="introductionContent">
          At Dr. Palamsetty Innovations, we understand the importance of staying ahead in today's rapidly evolving world. That's why we offer a range of services, including academic assistance, internship opportunities, courses, workshops, and seminars.
        </p>
      </div>
    </div>
    <div style={{}}>
      <hr style={{ borderColor: "#00FF84", width: "95vw", boxShadow: '0px 7px 10px rgba(0, 255, 132, 0.5)' }} />
    </div>

    {/* OurWorksSection */}
    <div className="ourWorksSection">
      <h2 className="worksHeading">Our Works</h2>
      <div className="worksContainer">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="work">
            <div>
              <img style={{ width: '100%', height: '268px' }} src={"https://via.placeholder.com/150x150?text=Work${index}"} alt={"image"} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div><hr style={{ borderColor: "#00FF84", width: "95vw", }} /></div>

    {/* OurFounderWordsSection */}
    <div className="ourFounderWordsSection">
      <div className="founderWordsHeading">
        <h2>Our Founder's Words</h2>
      </div>
      <div className="founderWordsContent">
        <p className="founderWordsParagraph">
          Welcome to Dr. Palamsetty Innovations, where we are dedicated to empowering students in their academic journey and beyond. Founded with a passion for education and innovation, we strive to provide comprehensive support to students, helping them excel in their studies and prepare for successful careers.
        </p>
        <div className="founderWordsImageContainer">
          <img className="founderWordsImage" src="https://via.placeholder.com/600x400" alt="Our Founder's Words" />
        </div>
      </div>
    </div>
    <div><hr style={{ borderColor: "#00FF84", width: "95vw", }} /></div>

    {/* OurVisionSection */}
    <div className="ourVisionSection">
      <div className="visionImageContainer">
        <img className="visionImage" src="https://via.placeholder.com/600x400" alt="Our Vision" />
      </div>
      <div className="visionContent">
        <h2>Our Vision</h2>
        <p className="visionParagraph">
          Welcome to Dr. Palamsetty Innovations, where we are dedicated to empowering students in their academic journey and beyond. Founded with a passion for education and innovation, we strive to provide comprehensive support to students, helping them excel in their studies and prepare for successful careers.
          <br />
          At Dr. Palamsetty Innovations, we understand the importance of staying ahead in today's rapidly evolving world. That's why we offer a range of services, including academic assistance, internship opportunities, courses, workshops, and seminars. Our goal is to equip students with the knowledge, skills, and experiences they need to thrive in their academic pursuits and transition seamlessly into the professional realm.
        </p>
      </div>
    </div>
    <div><hr style={{ borderColor: "#00FF84", width: "95vw", }} /></div>

    {/* ValuesSection */}
    <div className="ourValuesSection">
      <h2>Our Values</h2>
      <div className="valuesContainer">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="value">
            <div className="circle"></div>
            <h3>Value {index}</h3>
          </div>
        ))}
      </div>
    </div>
    <div><hr style={{ borderColor: "#00FF84", width: "95vw", }} /></div>

    {/* Footer */}
    <Footer />
  </div>
); export default AboutUs;