import React from "react";
import "./style.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

function Bio(props) {
  return (
  <Jumbotron><Image src={props.profilePic} />{props.username}</Jumbotron>
  );
}

export default Bio;