import React, {useState, useRef} from 'react';
import { Link } from "react-router-dom";
import API from "../utils/API";
import { AUTH_SET_LOGGED_IN } from "../utils/actions";
import { useStoreContext } from '../utils/GlobalStore';
import {Container, Row, Col} from "../components/Grid";
import Navigation from '../components/Navigation/Navigation'


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
      <Navigation />
        <Container>
            <Row>
                <Col size="col-md-6 col-md-offset-3">
                    <h2>Sign Up Form</h2>
                    <form className="signup" onSubmit={handleSignup}>
                        <div className="form-group">
                            <label htmlFor="exampleInputUserName1">Username</label>
                            <input type="text" className="form-control" placeholder="Username" ref={userNameRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" placeholder="Email" ref={emailRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={passwordRef} />
                        </div>
                        <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                        </div>
                        <button type="submit" className="btn btn-default">Sign Up</button>
                    </form>
                    <br />
                    <p>Or log in <Link to="/">here</Link></p>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Signup;