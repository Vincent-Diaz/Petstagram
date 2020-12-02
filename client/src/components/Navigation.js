import React from "react";
import { Navbar, Dropdown, DropdownButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import './Post.css';



function Navigation(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ border: "1px solid black", marginBottom: '50px' }}>
        <Navbar.Brand href="/">
          <p id="logo" >Petstagram</p>
        </Navbar.Brand>
        <Container className="justify-content-end">
          <Image roundedCircle style= {{width:"50px", height:"50px", marginRight:"5px"}} src={props.profilePic}/>
          <DropdownButton  id="dropdown-basic-button" title={props.username}>
            <Dropdown.Item href="/login">Logout</Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;