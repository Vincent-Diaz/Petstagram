import React from "react";
import "./style.css";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

function ImageBlock(props) {
  return (
      <>
  <Container>
      <Image id="imageBlock" src={props.imageUrl} />
  </Container>
  </>
  );
}

export default ImageBlock;