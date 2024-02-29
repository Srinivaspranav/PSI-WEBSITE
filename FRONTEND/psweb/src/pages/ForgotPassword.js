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
                        <button type="submit" className="buttonf">
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

export default ForgotPassword;
