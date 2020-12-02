import React from 'react';
import Navigation from '../components/Navigation/Navigation'
import { Row, Col, Container, Image } from 'react-bootstrap';

import ImageBlock from '../components/ImageBlock/ImageBlock';
import testPost from "../testPost.json";
import Bio from '../components/Bio/bio';

function Profile(props) {
    const test = testPost[0]
    return (
        <>
       <Navigation {...test}/>
       <Bio {...test}/>
       <Container>
        <Row>
            <Col>
            <Row></Row>
            <Row>
                <Col><ImageBlock {...test} /></Col>
                <Col><ImageBlock {...test} /></Col>
                <Col><ImageBlock {...test} /></Col>
            </Row>
            <Row>
                <Col><ImageBlock {...test} /></Col>
                <Col><ImageBlock {...test} /></Col>
                <Col><ImageBlock {...test} /></Col>
            </Row>
            <Row>
                <Col><ImageBlock {...test} /></Col>
                <Col><ImageBlock {...test} /></Col>
                <Col><ImageBlock {...test} /></Col>
            </Row>
            </Col>
        </Row>
        </Container>
        </>
    )
};

export default Profile;