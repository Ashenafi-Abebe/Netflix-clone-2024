import React from 'react';
import './Header.css';
import NetflixLogo from '../../assets/images/netflix.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className='header-outer-container'>
      <div className='header-container'>
        <div className='header-left'>
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflixlogo" width="100"  />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className='header_right'>
          <ul>
            <li><SearchIcon /></li>
            <li>Kids</li>
            <li><NotificationsIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;




