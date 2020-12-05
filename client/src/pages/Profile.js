import React from 'react';

import { Row, Col, Container} from 'react-bootstrap';

import ImageBlock from '../components/ImageBlock/ImageBlock';
import testPost from "../testPost.json";
import Bio from '../components/Bio/bio';
import Avatar from 'react-avatar';
import { useStoreContext } from '../utils/GlobalStore';
import Navigation from '../components/Navigation';

function Profile() {
    const [state] = useStoreContext();
    return (
        <div>
            <Navigation/>
            <Container>
                <Row style={{display:'flex',alignItems:'center' }}>
                    <Col size="md-2">
                     <Avatar facebookId="100008343750912" size="150" />
                     <h4> {state.userName} </h4>
                    </Col>
                    <Col size="md-10">
                        <p><strong>Followers: </strong>number of followers here</p>
                        <p><strong>Posts: </strong>number of posts here </p>
                    </Col>
                </Row>
                <Row>
                <h3>Posts Here</h3>
                {/* <Avatar githubHandle="sitebase" size={150} round="20px"/> */}
                </Row>
                
            </Container>
        </div>
    )
};

export default Profile;