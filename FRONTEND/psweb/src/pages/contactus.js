import React from 'react';
import "../Style/contactus.css";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../Style/scrollbar.css';


const ContactUs = () => {
  const handleFileInputChange = (event) => {
    const files = event.target.files;
    console.log(files);
    // Do something with the selected file(s)
  };

  return (
    <div className="appContact">
      <NavBar />
      <div className='pane'>
        <div className="verticalBox">
          <img
            alt="Logo"
            src="https://cdn.discordapp.com/attachments/1205756212445192263/1207363674990313562/Dr.Palamsetty_Innovations123.png?ex=65df600b&is=65cceb0b&hm=d8811294349ee35313077b961c60da34b5a054821e87fd435d7ed27f448f3c38&"
            style={{ height: '50px', width: '150px' }}
          /><br /><br /><br /><br /><br />
          <h1 style={{ color: "#01FF46" }}>Need help?</h1><br /><br />
          <p>Reach us out</p>
          <p>Our cust omer support is very welcoming,we will do our best to help you!</p><br /><br /><br /><br />
          <h1>Our Office</h1>
          <p>A Very nice office, A very nice city,A very nice Country, A very nice pincode.</p>
        </div>
        <div className="detailsSection">
          <div className='dbox'>
            <div className="detailsField"><p>Name:</p><input type='text' /></div>
            <div className="detailsField"><p>Email ID:</p><input type='text' /></div>
            <div className="detailsField"><p>Institution:</p><input type='text' /></div>
            <div className="detailsField"><p>Phone Number:</p><input type='text' /></div>
            <div className="detailsField"><p>Country:</p><input type='text' /></div>
            <input
              style={{
                height: "300px",
                width: "99%",
                marginTop: "4%",
                border: "dashed",
                marginLeft: "0%"
              }}
              type='textarea'
              placeholder='How can we Help you?'
            />
            <input style={{ marginTop: "1%", marginLeft: "11.25%" }} type="file" id="myFileInput" onChange={handleFileInputChange} />
            <div style={{ marginTop: "1%", marginLeft: "-3%" }}>
              <input style={{ marginLeft: "-24.5%" }} id='t&c' type='checkbox' required /><label for="t&c" style={{ marginLeft: "-25.5%", color: "#00FF84" }}>I have read Dr.Pallemsetty Innovations Privacy Policy and agree to the terms and conditions.</label>
            </div>
            <button className='submit'>SUBMIT</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
