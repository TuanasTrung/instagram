import '../styles/feed.scss';
import PicFeed from './PicFeed';
import pic1 from '../images/feed1.png';
import pic2 from '../images/feed2.png';
import pic3 from '../images/feed3.png';

const Feed = () => {

    const pic = [pic3, pic2, pic1];

    return (
        <div className='feedPic'>
            {pic.map((item,index) => (
                <PicFeed key={index} dataFromParent={item} />
            ))}
        </div>
    )
}

export default Feed;