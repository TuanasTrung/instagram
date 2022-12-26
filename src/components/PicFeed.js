import React, { useState } from 'react';
import '../styles/picFeed.css';
import FeedPicHover from './FeedPicHover';

const PicFeed = (props) => {

    const [hover, setHover] = useState(false);

    return (
        <div className='feedPic1' onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>setHover(false)}>
            <img className="noel1" src={props.dataFromParent}></img>
            {hover === true && <FeedPicHover/>}
        </div>
    )
}

export default PicFeed
