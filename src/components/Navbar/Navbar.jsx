import clsx from "clsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  bell,
  chevronDown,
  deposit,
  logo,
  menu,
  userAvatar,
} from "../../images/images";
import Button from "../Button/Button";
import Options from "../Options/Options";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={clsx(classes.overlay, isOpen && classes.active)}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className={classes.navbar}>
        <div className={classes.left}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />

            <div className={classes.logoText}>Cube</div>
          </div>

          <div className={clsx(classes.links, isOpen && classes.active)}>
            <div className={classes.cross} onClick={() => setIsOpen(false)}>
              &times;
            </div>

            <Link to="/">Buy Crypto</Link>
            <Link to="/">Markets</Link>
            <Options
              options={[
                {
                  label: "Foo",
                  to: "/foo",
                },
                {
                  label: "Buzz",
                  to: "/",
                },
              ]}
            >
              Trade <img className={classes.arrow} src={chevronDown} alt="" />
            </Options>
            <Link to="/">Exchange</Link>
            <Options
              options={[
                {
                  label: "Foo",
                  to: "/foo",
                },
                {
                  label: "Buzz",
                  to: "/",
                },
              ]}
            >
              Future <img className={classes.arrow} src={chevronDown} alt="" />
            </Options>
            <Options
              options={[
                {
                  label: "Foo",
                  to: "/",
                },
                {
                  label: "Buzz",
                  to: "/",
                },
              ]}
            >
              More <img className={classes.arrow} src={chevronDown} alt="" />
            </Options>

            <div className={classes.smallLinks}>
              <Options
                options={[
                  {
                    label: "Foo",
                    to: "/foo",
                  },
                  {
                    label: "Buzz",
                    to: "/",
                  },
                ]}
              >
                Assets{" "}
                <img className={classes.arrow} src={chevronDown} alt="" />
              </Options>
              <Options
                options={[
                  {
                    label: "Foo",
                    to: "/foo",
                  },
                  {
                    label: "Buzz",
                    to: "/",
                  },
                ]}
              >
                Trades{" "}
                <img className={classes.arrow} src={chevronDown} alt="" />
              </Options>

              <div className="d-flex align-items-center gap-3">
                <img
                  className={classes.avatar}
                  src={userAvatar}
                  alt="user-avatar"
                />

                <div className={classes.notifications}>
                  <img src={bell} alt="bell" />
                  <div className={classes.number}>24</div>
                </div>
              </div>

              <Button
                rounded
                primary
                icon={deposit}
                onClick={() => navigate("/deposit")}
              >
                Deposit
              </Button>
              <Button rounded outlined onClick={() => navigate("/wallet")}>
                Wallet
              </Button>
            </div>
          </div>
        </div>

        <div className={classes.right}>
          <Button
            rounded
            primary
            icon={deposit}
            onClick={() => navigate("/deposit")}
          >
            Deposit
          </Button>
          <Button rounded outlined onClick={() => navigate("/wallet")}>
            Wallet
          </Button>{" "}
          <Button rounded outlined onClick={() => navigate("/pay")}>
            Pay
          </Button>
          <Options
            options={[
              {
                label: "Foo",
                to: "/foo",
              },
              {
                label: "Buzz",
                to: "/",
              },
            ]}
          >
            Assets <img className={classes.arrow} src={chevronDown} alt="" />
          </Options>
          <Options
            options={[
              {
                label: "Foo",
                to: "/foo",
              },
              {
                label: "Buzz",
                to: "/",
              },
            ]}
          >
            Trades <img className={classes.arrow} src={chevronDown} alt="" />
          </Options>
          <div className={classes.notifications}>
            <img src={bell} alt="bell" />
            <div className={classes.number}>24</div>
          </div>
          <img className={classes.avatar} src={userAvatar} alt="user-avatar" />
        </div>

        <div className={classes.menu} onClick={() => setIsOpen(true)}>
          <img src={menu} alt="menu" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
