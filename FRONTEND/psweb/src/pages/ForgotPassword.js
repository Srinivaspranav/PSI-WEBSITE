// components/ForgotPassword.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/ForgotPassword.css';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email } = this.state;

        if (!this.isValidEmail(email)) {
            this.setState({ error: 'Please enter a valid email address.' });
            return;
        }

        // Perform password reset logic here (e.g., API call)
        console.log('Forgot password request submitted for email:', email);

        // Reset state
        this.setState({ email: '', error: '' });
    };

    isValidEmail = (email) => {
        // Add your email validation logic here
        return /\S+@\S+\.\S+/.test(email);
    };

    handleChange = (e) => {
        this.setState({ email: e.target.value, error: '' });
    };

    render() {
        const { email, error } = this.state;

        return (
            <div className="container">
                <div className="topSection">
                    <h2>Forgot Password?</h2>
                </div>
                <div style={{ padding: '30px' }}>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <p>Enter the email you registered with, and we will send you a link to reset your password</p>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="email" className="label">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={this.handleChange}
                                className="input"
                                required
                            />
                        </div>
                        <button type="submit" className="button">
                            <b>Send Email</b>
                        </button>
                    </form>
                    <p className="new">
                        New Here? <a style={{ color: 'green' }} href='#'><b>Sign Up</b></a>
                    </p>
                </div>
            </div>
        );
    }
}

ForgotPassword.propTypes = {
    // Add any necessary prop types here
};

<<<<<<< HEAD
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
=======
export default ForgotPassword;
>>>>>>> dbc1d445c555a7d2459d11beaf5b074ed1f114a7
