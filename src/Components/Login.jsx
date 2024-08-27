import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function BusinessLogin() {
    const [creds, setcreds] = useState({
        businessEmail: '', password: ''
    });
    const [togglepass, settogglepass] = useState(false);

    const handleTogglePassword = () => {
        settogglepass(!togglepass);
    };

    const handleFieldChange = (e, field) => {
        setcreds({ ...creds, [field]: e.target.value });
    };

    const navigate = useNavigate();

    const dologin = async () => {
        if (creds["businessEmail"] === '') {
            toast.error("Please Provide an Email!");
            return;
        }
        if (creds["password"] === '') {
            toast.error("Please Provide a Password!");
            return;
        }

        let res = await fetch(process.env.REACT_APP_BACKEND + "business/loginBusiness", {
            headers: { "content-type": "application/json" },
            body: JSON.stringify(creds),
            method: "POST"
        });

        res = await res.text();

        if (res === "Not Found") {
            toast.error("Business Not Found!");
            return;
        }
        if (res === "Invalid") {
            toast.error("Invalid Password!");
            return;
        } else {
            localStorage.setItem("vastrikaBusiness", res);
            navigate("/business/dashboard");
            toast.success("Login Successful! Please wait...", { autoClose: 2000 });
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    };

    return (
        <div className='wrapper light-container'>
            <div className="login-container">
                <h2 className="login-head">Business Login</h2>
                <div className="mail-container">
                    <p className="ip-head">Business Email</p>
                    <input placeholder="Business Email" type="text" className='ip-input' 
                        onChange={(e) => handleFieldChange(e, "businessEmail")} />
                </div>
                <div className="pw-container">
                    <p className="ip-head">Password</p>
                    <input placeholder="Password" className="ip-input" type={togglepass ? "text" : "password"} 
                        onChange={(e) => handleFieldChange(e, "password")} />
                </div>
                <div className="wrapper">
                    <p className="toggle-pass" onClick={handleTogglePassword}>
                        {togglepass ? "Hide Password" : "Show Password"}
                    </p>
                </div>
                <div className="wrapper">
                    <button onClick={dologin} className="login-btn">Login</button>
                </div>

                <div className="wrapper">
                    <p className="newuser-msg">New Business?</p>
                    <Link to="businessRegister" className='newuser-link'>Register</Link>
                </div>
            </div>
        </div>
    );
}
