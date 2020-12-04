import React from "react";
import {Link} from "react-router-dom"
import { useStoreContext } from '../../utils/GlobalStore';
import { Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import '../Post/Post.css'

function Navigation(props) {
  const [state] = useStoreContext();
  // console.log(state)
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ border: "1px solid black", marginBottom: '50px' }}>
        <Navbar.Brand href="/">
          <p id="logo" >Petstagram</p>
        </Navbar.Brand>
        <Container className="justify-content-end">
          <Image roundedCircle style= {{width:"50px", height:"50px", marginRight:"5px"}} src={props.profilePic}/>
          <DropdownButton  id="dropdown-basic-button" title={state.userName}>
            <Dropdown.Item href="/logout">Logout</Dropdown.Item>
           <Link to="/profile">Profile</Link>
          </DropdownButton>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;