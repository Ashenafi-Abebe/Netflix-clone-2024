import React from 'react';
import "../Footer/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
  return (
  <div className='Footer_outer_container'> 
  <div className='Footer_inner_container'>  
    <div className='footer-container'> <ul>
          <li><FacebookIcon /></li>
          <li><InstagramIcon /></li>
          <li><XIcon/></li>
          <li><YouTubeIcon /></li>
        </ul>
      </div>
        <div className='footer-data_1'>
          <ul>
            <li>Audio Description</li>
            <br />
            <li>Investor Relations</li>
            <br />
            <li>Privecy</li>
            <br />
            <li>Contact Us</li>
          </ul>
        </div>
      <div className='footer-data_2'>
        <ul>
          <li>Help center</li>
          <br />
          <li>Jobs</li>
          <br />
          <li>Legal Notifications</li>
          <br />
          Do Not Sell or Share My Personal Information
        </ul>
      </div>
      <div className='footer-data_3'>
        <ul>
          <li>Gift Card</li>
          <br />
          <li>Netflix Shop</li>
          <br />
          <li>Cookie Preferences</li>
          <br />
          <li>Ad Choices</li>
        </ul>
      </div>
      <div className='footer-data_4'>
        <ul>
          <li>Media center</li>
          <br />
          <li>Terms of Use </li>
          <br />
          <li> Corporate Information</li>
        </ul>
    </div>
    </div>
    <div className='Service_Code'>
    <p> Service Code</p>
    </div>
    <div
    className='copy_right'> &copy;1997-2024 Netflix, INC. </div>
    </div>
  );
}

export default Footer;

