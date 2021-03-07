// FUNCTION COMPONENT W/ STATE
import React from 'react';
import Avatar from '@material-ui/core/Avatar'
// MATERIAL UI LIBRARY 

const Post = ({avatarUrl, username, location, imageUrl, caption}) => {
    return(
        <div className="post">

        {/* TO WRAP AVATAR, USERNAME&LOCATION TOGETHER */}            
        <div className="post_header">
        {/* AVATAR */}
        <Avatar 
        className="post_avatar"
        alt="404"
        src={avatarUrl}
        />

        {/* AUTHOR */}
        <p className="post_author"><strong>{username}</strong>{"\n"} 
        <i>{location}</i>
        </p>
        </div>

        {/* IMAGE */}
        <img className="post_image" 
        src={imageUrl}
        alt="404">
        </img>

        {/* CAPTION: AUTHOR&CAPTION*/}
        <p className="post_caption">
            <strong>{username}</strong>
        {/* IMAGE CAPTION */}
        : {caption}</p>
    
    </div>
    )}

export default Post













