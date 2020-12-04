
import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import API from "../utils/API.js";
import { AUTH_SET_LOGGED_IN } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalStore";
import {Container, Row, Col} from "../components/Grid";

function Login() {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const emailRef = useRef();
    const passwordRef = useRef();
    const [, dispatch] = useStoreContext();

    const handleLogin = (event) => {
        event.preventDefault();
        const loginData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        API.login(loginData).then(response => {
            setShowError(false);
            const { email, userName } = response.payload;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                payload: {
                    email,
                    userName
                }
            });
        }).catch(err => {
            setShowError(true);
            setErrorMessage("An error occurred during login");
        })
    }

    return <div> 
        <Container>
            <Row>
                <Col size="col-md-6 col-md-offset-3">
                    <h2>Login</h2>
                    <form className="signup" onSubmit={handleLogin}>
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
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                    <br />
                    <p>Or Sign up  <Link to="/signup">here</Link></p>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Login;