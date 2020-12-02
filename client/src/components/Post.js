import React from 'react';
import './Post.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

function Post( props ) {
    return (
        <Container style={{marginLeft: "100px"}}>
        <div className="post">
                <div className="post__header">
                <Image className="post__avatar" src={props.profilePic}/>
                <h3>{props.username}</h3>
            </div>
           
            {/* header -> avater + username */}

            <Image className="post__image" src={props.imageUrl} />

            <h4 className="post__text"><strong>{props.username}</strong> {props.caption}</h4>
        </div>
        </Container>
    )
}

export default Post