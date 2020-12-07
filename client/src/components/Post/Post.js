import React from 'react';
import './Post.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Avatar from '@material-ui/core/Avatar';

function Post( props ) {
    return (
        <Container style={{marginLeft: "100px"}}>
        <div className="post" key={props._id}>
                <div className="post__header">
                <Avatar className="post__avatar" alt={props.title} src="/static/images/avatar/1.jpg"/>
                <h3><a href="/profile">{props.title}</a></h3>
            </div>
           
            {/* header -> avater + username */}

            <Image className="post__image" src={props.imageUrl} />

            <h4 className="post__text"><strong><a href="/profile">{props.title}</a></strong> {props.caption}</h4>
        </div>
        </Container>
    )
}

export default Post