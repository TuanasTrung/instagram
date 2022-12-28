import React, { useState } from 'react';
import '../styles/picFeed.scss'
import FeedPicHover from './FeedPicHover';

const TaggedPic = (props) => {

    const [hover, setHover] = useState(false);

    return (
        <div className='feedPic1' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img className='noel1' src={props.dataFromParent}
            ></img>
            {hover && <FeedPicHover />}
        </div>
    )
}

export default TaggedPic
