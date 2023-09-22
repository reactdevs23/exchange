import { Link } from "react-router-dom";

import { fb, twitter, yt } from "../../images/images";
import classes from "./Footer.module.css";

const Footer = () => {
  const socialLinks = [
    { icon: fb, to: "https://www.facebook.com" },
    { icon: twitter, to: "www" },
    { icon: yt, to: "www" },
  ];
  return (
    <footer className="mainWrapper">
      <div className={classes.footerWrap}>
        <div className={classes.footerMain}>
          <div className={classes.links}>
            <h4 className={classes.title}>About Us</h4>

            <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Careers</Link>
            <Link to="/">News</Link>
            <Link to="/">Press</Link>
            <Link to="/">Legal</Link>
          </div>
          <div className={classes.links}>
            <h4 className={classes.title}>Products</h4>

            <Link to="/">Exchange</Link>
            <Link to="/">Buy Crypto</Link>
            <Link to="/">Pay</Link>
            <Link to="/">NFT</Link>
            <Link to="/">Research</Link>
          </div>
          <div className={classes.links}>
            <h4 className={classes.title}>Service</h4>

            <Link to="/">Downloads</Link>
            <Link to="/">Download Application</Link>
            <Link to="/">Affiliates</Link>
            <Link to="/">Referral</Link>
          </div>
          <div className={classes.links}>
            <h4 className={classes.title}>Learn</h4>

            <Link to="/">Learn &amp; Earn</Link>
            <Link to="/">Bitcoin Price</Link>
            <Link to="/">Ethereum Price</Link>
            <Link to="/">Buy Bitcoin</Link>
            <Link to="/">Buy Ethereum</Link>
          </div>

          <div>
            <div className={classes.socialLinks}>
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.to}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.socialIconContainer}
                >
                  <img
                    src={social.icon}
                    alt="#"
                    className={classes.socialIcon}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.copyright}>
          <p>© 2023 Cube, All Rights Reserved.</p>

          <div className={classes.privacyAndCondition}>
            <Link>Privacy Policy</Link>
            <Link>Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
