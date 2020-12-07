import React from 'react';
import './Post.css';
// import Image from 'react-bootstrap/Image'
// import Container from 'react-bootstrap/Container'
import Avatar from '@material-ui/core/Avatar';

function Post(props) {
    return (
        <div className="card home-card" key={props._id}>
            <div className="post__header">
                <Avatar className="post__avatar" alt={props.title} src="/static/images/avatar/1.jpg" />
                <h3><a href="/profile">{props.title}</a></h3>
            </div>
            <div className="card-image">
                <img src={props.imageUrl} />
            </div>
            <div className="card-content">
                {/* <i className="material-icons" style={{ color: "red" }}>favorite</i> */}
                <p>{props.caption}</p>
                <input type="text" placeholder="add a comment" />
            </div>

            {/* <h4 className="post__text"><strong><a href="/profile">{props.title}</a></strong> {props.caption}</h4> */}
        </div>

    )
}

export default Post