import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
      </div>

      <div className="infoText">
        People watch movies for a lot of different reasons. Some watch for
        escapism—to leave their everyday lives and experience the exotic,
        exciting lands that are in the movies they watch. Some watch movies to
        be thrilled or even scared, They watch action movies and horror movies
        to get the blood pumping. I watch movies for another reason—to be
        inspired. I love inspirational speeches. When I come out of a movie, I
        want to feel like I can conquer the world, that everything is possible,
        and that good will win out in the end.
      </div>

      <div className="socialIcons">
        <span className="icon">
          <FacebookIcon />
        </span>
        <span className="icon">
          <InstagramIcon />
        </span>
        <span className="icon">
          <TwitterIcon />
        </span>
        <span className="icon">
          <LinkedInIcon />
        </span>
      </div>
    </div>
  );
};

export default Footer;
