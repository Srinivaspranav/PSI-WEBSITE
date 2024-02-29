// ResetPassword.js
import React, { useState } from 'react';
import "../Style/ResetPassword.css";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleResetPassword = async () => {
        try {
            if (newPassword !== confirmPassword) {
                setErrorMessage('Passwords do not match');
                return;
            }
            // Implement reset password logic here
            setSuccessMessage('Password reset successful!');
        } catch (error) {
            console.error('Password reset error:', error.message);
            setErrorMessage('Password reset failed. Please try again later.');
        }
    };

    return (
        <div className="container">
            <h2>Reset Password</h2>

            <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input"
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input"
            />
            <button onClick={handleResetPassword} className="button">Reset Password</button>
            {errorMessage && <p className="errorMessage">{errorMessage}</p>}
            {successMessage && <p className="successMessage">{successMessage}</p>}
        </div>
    );
};

export default ResetPassword;
