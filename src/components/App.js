
import '../styles/App.scss';
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Feed from './Feed';
import ReelsComponent from './ReelsComponent';
import SavedComponent from './SavedComponent';
import TaggedComponent from './TaggedComponent';
import EditProfile from './EditProfile';
import UpdateAvatar from './UpdateAvatar';
import postFeed from '../images/grid-ig.png';
import reelsFeed from '../images/reels-ig.png';
import savedFeed from '../images/saved-ig.png';
import taggedFeed from '../images/tagged-ig.png';


function App() {

  const [navbar, setNavbar] = useState('POSTS');
  const [linkAva, setLinkAva] = useState('https://m.media-amazon.com/images/M/MV5BMDM1M2JhYmQtOGJhMy00NWY2LTkwNTItZjkzNDI1NzBiZGZkXkEyXkFqcGdeQXVyMTUzMTY3Mjc0._V1_.jpg');
  const [changeAva, setChangeAva] = useState(false);
  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState('tuanastrung');
  const navigate = useNavigate({});

  const show = () => {
    setChangeAva(true);
  }

  const onUpdateLink = (linkState) => {
    setLinkAva(linkState);
    setChangeAva(false);
  }

  const onHandleSubmitForm = (inputState) => {
    setUserName(inputState);
  }

  return (
    <div className="App">
      <div className="full">
        <Menu dataFromParent={linkAva} />
        <div className="ig-right">
          <div className="ig-right-top">
            <div className="ig-top-center">
              <div className="avatar" >
                <img className="avatarPic" onClick={show} src={linkAva} />
              </div>
              <div className="infor">
                <div className="line-1">
                  <span className="account">{userName}</span>
                  <button className="editProfile" onClick={() => navigate("/account/edit")}>Edit profile</button>
                  <div className='setting'>
                    <svg aria-label="Options" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="30"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                  </div>
                </div>
                <div className="line-2">
                  <div className='line2-left'>
                    <div className='numberPosts'>9</div>
                    <div className='textPosts'>posts</div>
                  </div>
                  <div className='line2-mid '>
                    <div className='numberFollowers'>261</div>
                    <div className='txtFollowers'>followers</div>
                  </div>
                  <div className='line2-bot'>
                    <div className='numberFollowing'>507</div>
                    <div className='txtFollowing'>following</div>
                  </div>
                </div>
                <div className="line-3">le tuan trung</div>
              </div>
            </div>
          </div>
          <div className="ig-right-bot">
            <div className='ig-bot-center'>
              <div className='menu-feed'>
                <div className='post-feed' onClick={() => { navigate("/"); setNavbar('POSTS') }} style={{ color: navbar === 'POSTS' ? 'black' : 'rgb(153, 153, 153)', borderTop: navbar === 'POSTS' ? '1px solid black' : 'none' }}>
                  <img src={postFeed} style={{ opacity: navbar === 'POSTS' ? '100%' : '60%' }}></img>
                  <span className='posts'>POSTS</span>
                </div>
                <div className='reels-feed' onClick={() => { navigate('/reels'); setNavbar('REELS') }} style={{ color: navbar === 'REELS' ? 'black' : 'rgb(153, 153, 153)', borderTop: navbar === 'REELS' ? '1px solid black' : 'none' }}>
                  <img src={reelsFeed} style={{ opacity: navbar === 'REELS' ? '100%' : '60%' }}></img>
                  <span className='reelss'>REELS</span>
                </div>
                <div className='saved-feed' onClick={() => { navigate('/saved'); setNavbar('SAVED') }} style={{ color: navbar === 'SAVED' ? 'black' : 'rgb(153, 153, 153)', borderTop: navbar === 'SAVED' ? '1px solid black' : 'none' }}>
                  <img src={savedFeed} style={{ opacity: navbar === 'SAVED' ? '100%' : '60%' }}></img>
                  <span className='saved'>SAVED</span>
                </div>
                <div className='tagged-feed' onClick={() => { setNavbar('TAGGED'); navigate('/tagged') }} style={{ color: navbar === 'TAGGED' ? 'black' : 'rgb(153, 153, 153)', borderTop: navbar === 'TAGGED' ? '1px solid black' : 'none' }}>
                  <img src={taggedFeed} style={{ opacity: navbar === 'TAGGED' ? '100%' : '60%' }}></img>
                  <span className='tagged'>TAGGED</span>
                </div>
              </div>
              <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='/reels' element={<ReelsComponent />} />
                <Route path='/saved' element={<SavedComponent />} />
                <Route path='/tagged' element={<TaggedComponent />} />
              </Routes>
            </div>
          </div>
          <Routes>
            <Route path='/account/edit' element={<EditProfile dataFromParent={linkAva} userNameFromParent={userName} handleSubmitForm={onHandleSubmitForm} />} />
          </Routes>
        </div>
      </div>
      {changeAva === true && <UpdateAvatar onCancel={() => setChangeAva(false)} onLink={onUpdateLink} />}
    </div>
  );
}

export default App;
