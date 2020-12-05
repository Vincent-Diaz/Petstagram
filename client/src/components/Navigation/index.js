import React from "react";
import {Link} from "react-router-dom"
import { useStoreContext } from '../../utils/GlobalStore';
import { Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import {user} from 'react-icons-kit/fa/user'
import "./style.css"

function Navigation() {
  const [state] = useStoreContext();
  return (
    <>
      <Navbar style={{ background:'linear-gradient(to right,#009FFF, #c471ed, #f64f59, #f3b853 90%)', marginBottom: '50px' }}>
        <Navbar.Brand href="/">
          <h2 id="logo" style={{ color: 'white', marginRight:15}}>Petstagram</h2>
        </Navbar.Brand>
        <Container className="justify-content-end"  >
          <p className = "welcome"style={{ color: 'white', marginRight:15}}>Welcome {state.userName} </p>
          <Link to = "/home"><Icon size={32} icon={home} style={{ color: 'white', marginRight:15}}/></Link>
          <Link to="/profile"><Icon size={32} icon={user} style={{ color: 'white', marginRight:15}} /></Link>
          <Link to="/logout" style={{ color: 'white'}} className="logout">Log out</Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;