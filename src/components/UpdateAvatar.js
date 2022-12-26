import React, {useState} from 'react';
import '../styles/updateAvatar.css'

const UpdateAvatar = ({ onCancel, onLink, ...props }) => {

    const [linkState, setLinkState] = useState('');

    return (
        <div className='wrap'>
            <div className='box'>
                <div className='title'>
                    <span>Change Profile Photo</span>
                </div>
                <div className='link'>
                    <input placeholder='Gắn đường dẫn link vào đây' value={linkState} onChange={e=>setLinkState(e.target.value)} />
                </div>
                <div className='btn-update' onClick={()=>onLink(linkState)}>
                    <span>Upload Photo</span>
                </div>
                <div className='btn-cancel' onClick={()=>onCancel()}>
                    <span>Cancel</span>
                </div>
            </div>
        </div>
    )
}

export default UpdateAvatar;
