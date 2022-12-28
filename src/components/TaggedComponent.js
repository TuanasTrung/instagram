import TaggedPic from './TaggedPic';
import '../styles/feed.scss';
import pic4 from '../images/feed4.png';
import pic5 from '../images/feed5.png';
import pic6 from '../images/feed6.png';

const TaggedComponent = () => {

    const pic = [pic4, pic5, pic6];

    return (
        <div className='feedPic'>
            {pic.map((item, index) => (
                <TaggedPic key={index} dataFromParent={item} />
            ))}
        </div>
    )
}

export default TaggedComponent;