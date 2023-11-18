import React, { useState } from "react";
import Input from "./Input/Input";
import styles from "./LoginSignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "./Checkbox/CheckBox";

const Login = () => {
  const navigate = useNavigate();
  const [rememberMe, setMemberMe] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const LoginHandler = async (e) => {
    e.preventDefault();

    navigate("/wallet");
  };

  const inputs = [
    {
      label: "Email Address",
      type: "email",
      name: "email",
      placeholder: "Enter your email address",
    },
    {
      label: "Password ",
      type: "password",
      name: "password",
      placeholder: "Enter your passcode",
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className={[styles.wrapper, styles.loginWrapper].join(" ")}>
        <div>
          <h2 className={styles.title}>SignIn into Account</h2>
          <p className={styles.text}>
            Sign in into your account using your email and password.
          </p>
        </div>
        <form action="" onSubmit={LoginHandler} className={styles.form}>
          <div className={styles.formsInputs}>
            {inputs.map((input, i) => (
              <Input
                {...input}
                key={i}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
          <div className={styles.rememberOrForgot}>
            <CheckBox
              label="Remember Me"
              checked={rememberMe}
              setChecked={setMemberMe}
            />{" "}
            <button className={styles.forgot}>Forgot Code?</button>
          </div>{" "}
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
        <div className={styles.suggetionContainer}>
          <p className={styles.suggestionText}>New on our platform? </p>{" "}
          <Link to="/signup" className={styles.toggle}>
            &nbsp;Create an account
          </Link>
        </div>
      </div>

      <div className={styles.overlay} onClick={() => navigate("/")}></div>
    </>
  );
};

export default Login;
