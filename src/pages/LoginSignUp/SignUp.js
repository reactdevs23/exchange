import React, { useState } from "react";
import Input from "./Input/Input";
import styles from "./LoginSignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "./Checkbox/CheckBox";

const SignUp = ({ Register }) => {
  const navigate = useNavigate();
  const [agreeTermsAndCondition, setAgreeTermsAndCondition] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (agreeTermsAndCondition) {
      navigate("/wallet");
    }
  };

  const inputs = [
    {
      label: "First Name ",
      type: "text",
      name: "firstname",
      placeholder: "Enter your first name",
    },
    {
      label: "Last Name ",
      type: "text",
      name: "lastname",
      placeholder: "Enter your last name",
    },
    {
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Enter your username",
    },
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
      <div className={[styles.mainWrapper, styles.signUp].join(" ")}>
        <div className={styles.wrapper}>
          <div>
            <h2 className={styles.title}>Create an Account</h2>
            <p className={styles.text}>
              Sign up with your email and get started with your free account.
            </p>
          </div>
          <form action="" onSubmit={signUpHandler} className={styles.form}>
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
            <div
              className={[
                styles.rememberOrForgot,
                styles.termsAndCondition,
              ].join(" ")}
            >
              <CheckBox
                label="I have agree to the "
                checked={agreeTermsAndCondition}
                setChecked={setAgreeTermsAndCondition}
              />{" "}
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.termsAndCondition}
              >
                Terms & Condition
              </a>
            </div>{" "}
            <button type="submit" className={styles.button}>
              Register Now
            </button>
          </form>
          <div className={styles.suggetionContainer}>
            <p className={styles.suggestionText}>Already have an account?</p>
            {"  "}
            <Link to="/login" className={styles.toggle}>
              &nbsp; Sign in instead
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={() => navigate("/")}></div>
    </>
  );
};

export default SignUp;
