import React from 'react';
import './Post.css';
import Avatar from 'react-avatar'

function Post( { username, caption, imageUrl } ) {
    return (
        <div className="post">
                <div className="post__header">
                <Avatar
                className="post__avatar"
                alt="AmazingDaniel"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1kALE9s6PhI7Vp4_ttdNpuL6_NE5v3AO0w&usqp=CAU"
                />
                <h3>{username}</h3>
            </div>
           
            {/* header -> avater + username */}

            <img className="post__image" src={imageUrl} />

            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post
