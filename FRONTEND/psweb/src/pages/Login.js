import React, { useState } from 'react';
import '../Style/Login.css'; // Import the CSS file
import { redirect } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [department, setDepartment] = useState('');
    const [fullname, setFullName] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const user = await response.json();
                console.log('Login successful:', user);
                // Perform further actions like setting user in state, redirecting, etc.
                window.location.href = '/dashboard'; // Corrected redirection
            } else {
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullname, email, password, confirmpassword, department }),
            });

            if (response.ok) {
                console.log('Registration successful');
                // Perform further actions like redirecting to login page, showing a success message, etc.
            } else {
                console.error('Registration failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    const handleToggleRegister = () => {
        setShowRegister((prevShowRegister) => !prevShowRegister);
    };


    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    };

    const handleconfirmpasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleToggleForgotPassword = () => {
        setShowForgotPassword(!showForgotPassword);
    };

    const handleForgotPasswordSubmit = (e) => {
        e.preventDefault();
        // Add your forgot password logic here
    };

    return (
        <div className="wrapper">
            <div className="formBox">
                {showRegister ? (
                    <div className="leftSection">
                        <h2>Sign Up</h2>
                        <form onSubmit={handleRegisterSubmit}>
                            <div className="inputBox">
                                <input
                                    type="fullname"
                                    value={fullname}
                                    onChange={handleFullNameChange}
                                    placeholder="Full Name"
                                    className="inputField"
                                    required
                                />
                            </div>
                            <div className="inputBox">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Email"
                                    className="inputField"
                                    required
                                />
                            </div>
                            <div className="inputBox">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Password"
                                    className="inputField"
                                    required
                                />
                            </div>
                            <div className="inputBox">
                                <input
                                    type="password"
                                    value={confirmpassword}
                                    onChange={handleconfirmpasswordChange}
                                    placeholder="Confirm Password"
                                    className="inputField"
                                    required
                                />
                            </div>
                            <div className="inputBox">
                                <select onChange={handleDepartmentChange} className="inputField" required>
                                    <option value="">Select Department</option>
                                    <option value="CIVIL ENGINEERING">CIVIL ENGINEERING</option>
                                    <option value="COMPUTER SCIENCE & ENGINEERING">COMPUTER SCIENCE & ENGINEERING</option>
                                    <option value="CHEMICAL ENGINEERING">CHEMICAL ENGINEERING</option>
                                    <option value="ENVIRONMENTAL ENGINEERING & MANAGEMENT">ENVIRONMENTAL ENGINEERING & MANAGEMENT</option>
                                    <option value="ELECTRICAL ENGINEERING">ELECTRICAL ENGINEERING</option>
                                    <option value="ELECTRONICS & COMMUNICATION ENGINEERING">ELECTRONICS & COMMUNICATION ENGINEERING</option>
                                    <option value="GEO-ENGINEERING">GEO-ENGINEERING</option>
                                    <option value="INFORMATION TECHNOLOGY & COMPUTER APPLICATIONS">INFORMATION TECHNOLOGY & COMPUTER APPLICATIONS</option>
                                    <option value="INSTRUMENT TECHNOLOGY">INSTRUMENT TECHNOLOGY</option>
                                    <option value="MARINE ENGINEERING">MARINE ENGINEERING</option>
                                    <option value="MECHANICAL ENGINEERING">MECHANICAL ENGINEERING</option>
                                    <option value="METALLURGICAL ENGINEERING">METALLURGICAL ENGINEERING</option>
                                    <option value="ENGINEERING CHEMISTRY">ENGINEERING CHEMISTRY</option>
                                    <option value="HUMANITIES & BASIC SCIENCES">HUMANITIES & BASIC SCIENCES</option>
                                    <option value="APPLIED MATHEMATICS">APPLIED MATHEMATICS</option>
                                    <option value="BIOCHEMISTRY">BIOCHEMISTRY</option>
                                    <option value="BIOTECHNOLOGY">BIOTECHNOLOGY</option>
                                    <option value="BOTANY">BOTANY</option>
                                    <option value="CHEMISTRY">CHEMISTRY</option>
                                    <option value="ENVIRONMENTAL SCIENCES">ENVIRONMENTAL SCIENCES</option>
                                    <option value="FOOD,NUTRITION & DIETETICS">FOOD,NUTRITION & DIETETICS</option>
                                    <option value="GEOGRAPHY">GEOGRAPHY</option>
                                    <option value="GEOLOGY">GEOLOGY</option>
                                    <option value="GEOPHYSICS">GEOPHYSICS</option>
                                    <option value="HUMAN GENETICS">HUMAN GENETICS</option>
                                    <option value="MARINE LIVING RESOURCES">MARINE LIVING RESOURCES</option>
                                    <option value="MATHEMATICS">MATHEMATICS</option>
                                    <option value="METEOROLOGY AND OCEANOGRAPHY">METEOROLOGY AND OCEANOGRAPHY</option>
                                    <option value="MICROBIOLOGY">MICROBIOLOGY</option>
                                    <option value="NUCLEAR PHYSICS">NUCLEAR PHYSICS</option>
                                    <option value="PSYCHOLOGY & PARAPSYCHOLOGY">PSYCHOLOGY & PARAPSYCHOLOGY</option>
                                    <option value="PHYSICS">PHYSICS</option>
                                    <option value="STATISTICS">STATISTICS</option>
                                    <option value="ANTHROPOLOGY">ANTHROPOLOGY</option>
                                    <option value="COMMERCE AND MANAGEMENT STUDIES">COMMERCE AND MANAGEMENT STUDIES</option>
                                    <option value="ECONOMICS">ECONOMICS</option>
                                    <option value="EDUCATION">EDUCATION</option>
                                    <option value="ENGLISH">ENGLISH</option>
                                    <option value="FINE ARTS">FINE ARTS</option>
                                    <option value="HINDI">HINDI</option>
                                    <option value="HISTORY AND ARCHAEOLOGY">HISTORY AND ARCHAEOLOGY</option>
                                    <option value="JOURNALISM & MASS COMMUNICATION">JOURNALISM & MASS COMMUNICATION</option>
                                    <option value="LIBRARY AND INFORMATION SCIENCE">LIBRARY AND INFORMATION SCIENCE</option>
                                    <option value="MUSIC & DANCE">MUSIC & DANCE</option>
                                    <option value="PHILOSOPHY & INFORMATION SCIENCE">PHILOSOPHY & INFORMATION SCIENCE</option>
                                    <option value="PHYSICAL EDUCATION & SPORTS SCIENCES">PHYSICAL EDUCATION & SPORTS SCIENCES</option>
                                    <option value="POLITICAL SCIENCE & PUBLIC ADMINISTRATION">POLITICAL SCIENCE & PUBLIC ADMINISTRATION</option>
                                    <option value="SANSKRIT">SANSKRIT</option>
                                    <option value="SOCIAL WORK">SOCIAL WORK</option>
                                    <option value="SOCIOLOGY">SOCIOLOGY</option>
                                    <option value="TELUGU">TELUGU</option>
                                    <option value="THEATRE ARTS">THEATRE ARTS</option>
                                    <option value="YOGA & CONSCIOUSNESS">YOGA & CONSCIOUSNESS</option>
                                    <option value="ARCHITECTURE">ARCHITECTURE</option>

                                    <option value=""></option>                </select>
                            </div>
                            <button type="submit" className="btn">
                                Sign Up
                            </button>
                        </form>
                        <div className="loginRegister">
                            <p>
                                Already have an account?{' '}
                                <button onClick={handleToggleRegister} className="registerLink">
                                    Login
                                </button>
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="leftSection">
                        <h2>Login</h2>
                        <form onSubmit={handleLoginSubmit}>
                            <div className="inputBox">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Email"
                                    className="inputField"
                                    required
                                />
                            </div>
                            <div className="inputBox">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Password"
                                    className="inputField"
                                    required
                                />
                            </div>
                            <div className="rememberForgot">
                                <label>
                                    <input className='checkbox'
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={handleRememberMeChange}
                                    />
                                    Remember me
                                </label>
                                <a href="/forgot" className="registerLink" onClick={handleToggleForgotPassword}>
                                    Forgot Password?
                                </a>
                            </div>

                            <button type="submit" className="btn">
                                Login
                            </button>
                            <div className="loginRegister">
                                <p>
                                    Don't have an account?{' '}
                                    <button onClick={handleToggleRegister} className="registerLink">
                                        Sign Up
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                )}
                <div className="rightSection">
                    <img
                        src="https://cdn.discordapp.com/attachments/1205756212445192263/1207363674990313562/Dr.Palamsetty_Innovations123.png?ex=65df600b&is=65cceb0b&hm=d8811294349ee35313077b961c60da34b5a054821e87fd435d7ed27f448f3c38&"
                        style={{ width: '17%', height: 'auto', top: '43%', position: 'absolute' }}
                        alt="Your Logo Alt Text"  // Provide meaningful alt text
                    />

                    <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '80px' }}>
                        <img src='https://cdn.discordapp.com/attachments/1205044912400371715/1207606690388905984/Google_Icons-09-512.png?ex=65e0425f&is=65cdcd5f&hm=e48c91d65b1ac80d51593a4fb80e7c5ba36c1d60c23f815a34c8b52836afa484&' alt="Image description" style={{ width: '45%', height: 'auto', paddingRight: '0px', paddingLeft: '40px' }} />
                        <div style={{ borderLeft: '2px solid white', height: '40px', margin: '0 20px ' }}></div>
                        <img src='https://cdn.discordapp.com/attachments/1205756212445192263/1207609856513679431/image_5.png?ex=65e04552&is=65cdd052&hm=0d052c3aebd7b7df75f5f65ad8532f9fdf8f665d78f4ca2c39aa02d6522862e9&' alt="Image description" style={{ width: '25%', height: 'auto', }}></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
