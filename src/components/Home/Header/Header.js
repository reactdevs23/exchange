import React, { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineAlignRight } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { logo } from "../../../images/images";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navItems = [
    { navItem: "Features", to: "/features" },
    { navItem: "Integrations", to: "/integrations" },
    { navItem: "Customers", to: "/customers" },
    { navItem: "Pricing", to: "/pricing" },
    { navItem: "Contact Us", to: "/contactus" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // there has 4 button istead of 2 button its because of responsiveness
  return (
    <div
      className={[styles.mainWrapper, isFixed && styles.fixedNavbar].join(" ")}
    >
      {" "}
      <div className="mainWrapper">
        <header className={styles.wrapper}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="#" className={styles.logo} />
            <h4 className={styles.logoText}>Cube</h4>
          </div>
          <div
            className={[styles.navItems, sidebar && styles.sidebar].join(" ")}
          >
            {navItems.map((el, i) => (
              <NavLink
                to={el.to}
                key={i}
                className={({ isActive }) =>
                  isActive
                    ? [styles.navItem, styles.activeProject].join(" ")
                    : [styles.navItem].join(" ")
                }
                onClick={() => setSidebar((prev) => !prev)}
              >
                {el.navItem}
              </NavLink>
            ))}
            {sidebar && (
              <MdOutlineClose
                className={[styles.hamburger, styles.close].join(" ")}
                onClick={() => setSidebar((prev) => !prev)}
              />
            )}{" "}
            <div
              className={[
                styles.buttonContainer,
                styles.mobileButtonContainer,
              ].join(" ")}
            >
              <button
                onClick={() => navigate("/login")}
                className={[styles.button, styles.signInButton].join(" ")}
              >
                Sign In
              </button>{" "}
              <button
                onClick={() => navigate("/signup")}
                className={[styles.button, styles.signUpButton].join(" ")}
              >
                Sign Up
              </button>{" "}
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button
              onClick={() => navigate("/login")}
              className={[styles.button, styles.signInButton].join(" ")}
            >
              Sign In
            </button>{" "}
            <button
              onClick={() => navigate("/signin")}
              className={[styles.button, styles.signUpButton].join(" ")}
            >
              Sign Up
            </button>{" "}
            <AiOutlineAlignRight
              className={styles.hamburger}
              onClick={() => setSidebar((prev) => !prev)}
            />
          </div>
          <AiOutlineAlignRight
            className={[styles.mobileHamburger].join(" ")}
            onClick={() => setSidebar((prev) => !prev)}
          />
        </header>
      </div>
    </div>
  );
};

export default Header;
