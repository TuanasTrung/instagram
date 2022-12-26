import React from 'react';
import '../styles/picFeed.css';

const TaggedPic = (props) => {
    return (
        <div className='feedPic1'>
            <img className='noel1'src={props.dataFromParent} ></img>
        </div>
    )
}

export default TaggedPic
