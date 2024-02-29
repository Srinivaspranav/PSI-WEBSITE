//CODE FOR FORGOT PASSWORD

import React, { useState } from 'react';
import "../Style/ForgotPassword.css";

function ForgotPassword() {
const [email, setEmail] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
console.log('Forgot password request submitted for email:', email);
setEmail('');
};

return (
<div style={styles.container}>
<div style={styles.topSection}>
<h2>Forgot Password?</h2>
</div>
<div style={{padding:"30px"}}>
<p>Enter the email you registered with and we will send you a link to reset your password</p>
<form style={styles.form} onSubmit={handleSubmit}>
<div style={styles.formGroup}>
<label htmlFor="email" style={styles.label}>Email:</label>
<input
type="email"
id="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
style={styles.input}
required
/>
</div>
<button type="submit" style={styles.button}>Send Email</button>
</form>
      
<p style={styles.text}>New Here? <a style={{color:'green'}}href='#'><b>Sign Up</b></a></p>
</div>
</div>
    
);
  
}

const styles = {
container: {
maxWidth: '400px',
margin: ' 30px 100px auto',
border: '1px solid #ccc',
borderRadius: '0px',
boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
    
},
text:{
paddingLeft:"90px",
},
form: {
display: 'flex',
flexDirection: 'column',
},
formGroup: {
marginBottom: '20px',
},
label: {
marginBottom: '10px',
},
input: {
width: '100%',
padding: '10px ',
background:'rgba(0,0,0,0.0)',
borderRadius: '5px',
border: '1px solid #ccc',
fontSize: '16px',
boxSizing: 'border-box',
    
},
buttonf: {
   
backgroundColor: '#007BFF',
color: '#fff',
padding: '10px 20px',
borderRadius: '5px',
border: 'none',
cursor: 'pointer',
fontSize: '16px',
width: '100%',
},
topSection: {
          
backgroundColor:'#003a55',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
color: '#fff',
boxShadow:'0 0 10px 0 rgb(0,0,0,0.5)'
},
}
export default ForgotPassword;