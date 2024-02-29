import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../Style/NavBar.css';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return(
    <div>
  <nav className='nav' >
    <div className='logo'>
      <img
        alt="Logo"
        src="https://cdn.discordapp.com/attachments/1205756212445192263/1207363674990313562/Dr.Palamsetty_Innovations123.png?ex=65df600b&is=65cceb0b&hm=d8811294349ee35313077b961c60da34b5a054821e87fd435d7ed27f448f3c38&" 
        style={{ height: '30px', width: '140px' }}  
      />
    </div>
    <div className="menu" onClick={() =>{
      setMenuOpen(!menuOpen);
    }}>
      <span></span>
      <span></span>
      <span></span>
      
    </div>
   
    <ul >
      <li className='navLi'><Link to="/" className="navLink">Home</Link></li>
      <li className='navLi'><Link to="/programmes" className="navLink">Our Programmes</Link></li>
      <li className='navLi'><Link to="/clubs" className="navLink">Clubs</Link></li>
      <li className='navLi'><Link to="/about" className="navLink">About Us</Link></li>
      <li className='navLi'><Link to="/contact" className="navLink">Contact Us</Link></li>
    </ul>

  
    <div className='loginButton' ><Link to="/login" className="navLink">Login</Link></div>


  </nav>

  
   {    
     menuOpen && 
     <ul  className= "open">
    <li className='navLi'><Link to="/" className="navLink">Home</Link></li>
    <li className='navLi'><Link to="/programmes" className="navLink">Our Programmes</Link></li>
    <li className='navLi'><Link to="/clubs" className="navLink">Clubs</Link></li>
    <li className='navLi'><Link to="/about" className="navLink">About Us</Link></li>
    <li className='navLi'><Link to="/contact" className="navLink">Contact Us</Link></li>
    </ul>}

</div>
  
  );
  };


  export default NavBar;
