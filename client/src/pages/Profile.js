import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import ImageBlock from '../components/ImageBlock/ImageBlock';
import testPost from "../testPost.json";
import Bio from '../components/Bio/bio';
import Avatar from 'react-avatar';
import { useStoreContext } from '../utils/GlobalStore';
import Navigation from '../components/Navigation'


function Profile() {
    const [state] = useStoreContext();
    return (
        <div>
            <Navigation />
            <div style={{ maxWidth: '550px', margin:"0px auto" }}>
                <Col size="md-2">
                    <Avatar facebookId="100008343750912" size="150" />
                    <h4> {state.userName} </h4>
                    <Link to="/upload" type="submit" className="btn btn-primary" id="profileBtn" >Upload </Link>
                </Col>
                <div>
                    <h4>{state.userName}</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "110%" }}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>
            
            <div className="gallery">
                <h3>Posts Here</h3>
                {/* <Avatar githubHandle="sitebase" size={150} round="20px"/> */}
            </div>


        </div>
    )
};

export default Profile;