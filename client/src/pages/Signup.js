import React from 'react';
import {Link} from 'react-router-dom';
import {Input} from '../components/Form/index';
import Button from '../components/Button/index';
import Card from '../components/Card/Card';
import Navigation from '../components/Navigation/Navigation'

function Signup() {
    return (
        <>
        <Navigation />
        <div>
            <Card>
                <form>
                    <Input type="email" placeholder="email"/>
                    <Input type="password" placeholder="password"/>
                    <Input type="password" placeholder="password again"/>
                    <Button>Signup</Button>
                </form>
                <Link to="/login">Already have an account?</Link>
            </Card>
        </div>
        </>
    )
};

export default Signup;

