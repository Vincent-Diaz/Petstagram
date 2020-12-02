import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from '../components/Form';
import Button from '../components/Button';
import Card from '../components/Card/Card';
import Navigation from '../components/Navigation/Navigation'

function Login() {
    return (
        <>
        <Navigation />
        <div>
            <Card>
                <form>
                    <Input type="email" placeholder="email"/>
                    <Input type="password" placeholder="password"/>
                    <Button>Login</Button>
                </form>
                <Link to="/signup">Don't have an account?</Link>
            </Card>
        </div>
        </>
    )
};

export default Login;
