import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import API from "../utils/api";
import { AUTH_SET_LOGGED_IN } from "../utils/actions";
import { useStoreContext } from '../utils/GlobalStore';
// import {Container, Row, Col} from "../components/Grid";
import { Navbar } from 'react-bootstrap';

function Signup() {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [, dispatch] = useStoreContext();

    const handleSignup = (event) => {
        event.preventDefault();
        const signupData = {
            userName: userNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        API.signup(signupData).then(response => {
            const { email, userName } = response.data;
            console.log(response)
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                payload: {
                    email,
                    userName
                }
            });
        }).catch(err => {
            setShowError(true);
            setErrorMessage("An error occurred while signing up");
        })
    }

    return <div>
        <Navbar style={{ background: 'linear-gradient(to right,#009FFF, #c471ed, #f64f59, #f3b853 90%)', marginBottom: '50px' }}>
            <Navbar.Brand href="/">
                <h2 id="logo" style={{ color: 'white', marginRight: 15 }}>Petstagram</h2>
            </Navbar.Brand>
        </Navbar>
        <div className="mycard">
            <div className='card auth-card'>
                <h2>Sign Up Form</h2>
                <form className="signup" onSubmit={handleSignup}>
                    <input type="text" className="form-control" placeholder="Username" ref={userNameRef} />


                    <input type="email" className="form-control" placeholder="Email" ref={emailRef} />



                    <input type="password" className="form-control" placeholder="Password" ref={passwordRef} />

                    <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
                <br />
                <p>Or log in <Link to="/">here</Link></p>
            </div>
        </div>
    </div>
}

export default Signup;