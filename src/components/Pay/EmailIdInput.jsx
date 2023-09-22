import { useState } from "react";

import classes from "./Pay.module.css";

const EmailIdInput = ({ onContinue }) => {
  const [inputState, setInputState] = useState("");
  const [selectedOption, setSelectedOption] = useState("Email");

  return (
    <div className={classes.emailIdInputWrap}>
      <div className={classes.options}>
        <button
          onClick={(e) => setSelectedOption(e.target.innerHTML)}
          className={selectedOption === "Email" && classes.active}
        >
          Email
        </button>
        <button
          onClick={(e) => setSelectedOption(e.target.innerHTML)}
          className={selectedOption === "Phone" && classes.active}
        >
          Phone
        </button>
        <button
          onClick={(e) => setSelectedOption(e.target.innerHTML)}
          className={selectedOption === "Pay ID" && classes.active}
        >
          Pay ID
        </button>
        <button
          onClick={(e) => setSelectedOption(e.target.innerHTML)}
          className={selectedOption === "Cube ID" && classes.active}
        >
          Cube ID
        </button>
      </div>

      <input
        type="text"
        placeholder="Recipient's Email"
        onChange={(e) => setInputState(e.target.value)}
      />

      <button
        disabled={!inputState}
        onClick={onContinue}
        className={classes.continue}
      >
        Continue
      </button>
    </div>
  );
};

export default EmailIdInput;
