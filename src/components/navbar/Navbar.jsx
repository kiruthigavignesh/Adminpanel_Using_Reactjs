import React from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
const navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type='text' placeholder='Search...' />
                <SearchIcon/>
            </div>
            <div className="items">
                <div className="item">
<LanguageIcon className="icon"/>
English
                </div>
                <div className="item">
<FullscreenExitIcon className="icon"/>
                </div>
                <div className="item">
<NotificationsIcon  className="icon"/>

<div className="counter">1</div>
                </div>
                <div className="item">
<ChatBubbleOutlineIcon   className="icon"/>
<div className="counter">2</div>
                </div>
                <div className="item">
<img src="images/kiruthiga_profilephoto.jpg"  className="avatar"/>
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default navbar
