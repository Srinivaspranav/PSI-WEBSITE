import '../Style/footer.css'

const Footer = () => (

    <footer className="footer">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <ul>
          <li> Company Name: ABC Corporation</li>
          <li> Email: info@abccorp.com</li>
          <li> Phone: (555) 123-4567</li>
          <li> Address: 123 Main Street, Cityville, State, 12345</li>
        </ul>
      </div>
      <div className="menu" >
        <h2>Menu</h2>
        <ul>
          <li> Home</li>
          <li> About Us</li>
          <li> Partners</li>
          <li> Clubs</li>
          <li> Contact Us</li>
        </ul>
      </div>
      <div className="social-icons">
        <div></div>
        <p>Follow us on</p>
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </footer>
  
  );
  export default Footer;