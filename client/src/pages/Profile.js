import React from 'react';
import { Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { useStoreContext } from '../utils/GlobalStore';
import Navigation from '../components/Navigation'


function Profile() {
    const [state] = useStoreContext();
    return (
        <div>
            <Navigation />
            <div style={{ maxWidth: '550px', margin:"0px auto" }}>
                <Row>
                <Col size="md-2">
                <Avatar style={{ height: '100px', width: '100px', fontSize: "70px" }} alt={state.userName} src="/static/images/avatar/1.jpg" />
                    {/* <Link to="/uploadProfilePic"><Avatar facebookId="100008343750912" size="150"/> </Link> */}  
                </Col>
                <Col size="md-10">
                    <p><strong>Username: </strong> {state.userName}</p>
                    <p><strong>Email: </strong> {state.email}</p>
                </Col>
                </Row>
                <Row>
                    <Col size="md-4">
                    <h4> {state.userName} </h4>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-5">
                    <Link to="/upload" type="submit" className="btn btn-primary" id="profileBtn" >Upload Post</Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default Profile;