import React from "react";
import styles from "./styles.module.css";

const Heading = ({ children, center, mobileCenter }) => {
  return (
    <h2
      className={[
        styles.heading,
        center && styles.center,
        mobileCenter && styles.mobileCenter,
      ].join(" ")}
    >
      {children}
    </h2>
  );
};

// title
const Title = ({ children, center, mainTitle, mobileCenter }) => {
  return (
    <h2
      className={[
        styles.title,
        center && styles.center,
        mainTitle && styles.mainTitle,
        mobileCenter && styles.mobileCenter,
      ].join(" ")}
    >
      {children}
    </h2>
  );
};

// tagline
const Tagline = ({ children, center, mobileCenter }) => {
  return (
    <p
      className={[
        styles.tagline,
        center && styles.center,
        mobileCenter && styles.mobileCenter,
      ].join(" ")}
    >
      {children}
    </p>
  );
};

//text

const Text = ({ children, center }) => {
  return (
    <p className={[styles.text, center && styles.center].join(" ")}>
      {children}
    </p>
  );
};
export { Heading, Title, Tagline, Text };
