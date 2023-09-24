import { useState } from "react";

import classes from "./CommonPays.module.css";

const CommonPays = ({ onContinue }) => {
  const [selectedTab, setSelectedTab] = useState("email");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [payId, setPayId] = useState("");
  const [cubeId, setCubeId] = useState("");
  return (
    <div className={classes.wrapper}>
      <div className={classes.buttonContainer}>
        <button
          htmlFor="email"
          className={[
            classes.button,
            selectedTab.toLowerCase() === "email" && classes.activeButton,
          ].join(" ")}
          onClick={() => setSelectedTab("email")}
        >
          Email
        </button>
        <button
          htmlFor="phone"
          className={[
            classes.button,
            selectedTab.toLowerCase() === "phone" && classes.activeButton,
          ].join(" ")}
          onClick={() => setSelectedTab("phone")}
        >
          Phone
        </button>
        <button
          htmlFor="payId"
          className={[
            classes.button,
            selectedTab.toLowerCase() === "payid" && classes.activeButton,
          ].join(" ")}
          onClick={() => setSelectedTab("payid")}
        >
          Pay ID
        </button>
        <button
          htmlFor="binanceId"
          className={[
            classes.button,
            selectedTab.toLowerCase() === "cubeid" && classes.activeButton,
          ].join(" ")}
          onClick={() => setSelectedTab("cubeid")}
        >
          Cube ID
        </button>
      </div>
      <div className={classes.inputWrapper}>
        {selectedTab.toLowerCase() === "email" && (
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Recipient Email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            className={classes.input}
          />
        )}
        {selectedTab.toLowerCase() === "phone" && (
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={classes.input}
          />
        )}
        {selectedTab.toLowerCase() === "payid" && (
          <input
            id="payId"
            name="payId"
            type="text"
            placeholder="Pay Id"
            value={payId}
            onChange={(e) => setPayId(e.target.value)}
            className={classes.input}
          />
        )}
        {selectedTab.toLowerCase() === "cubeid" && (
          <input
            id="cubeId"
            name="cubeId"
            type="text"
            placeholder="Cube ID"
            value={cubeId}
            onChange={(e) => setCubeId(e.target.value)}
            className={classes.input}
          />
        )}
      </div>
      <button
        disabled={!recipientEmail || !phone || !payId || !cubeId}
        onClick={onContinue}
        className={classes.continue}
      >
        Continue
      </button>
    </div>
  );
};

export default CommonPays;
// <div className={classes.emailIdInputWrap}>
//   <div className={classes.options}>
//     <button
//       onClick={(e) => setSelectedOption(e.target.innerHTML)}
//       className={selectedOption === "Email" && classes.active}
//     >
//       Email
//     </button>
//     <button
//       onClick={(e) => setSelectedOption(e.target.innerHTML)}
//       className={selectedOption === "Phone" && classes.active}
//     >
//       Phone
//     </button>
//     <button
//       onClick={(e) => setSelectedOption(e.target.innerHTML)}
//       className={selectedOption === "Pay ID" && classes.active}
//     >
//       Pay ID
//     </button>
//     <button
//       onClick={(e) => setSelectedOption(e.target.innerHTML)}
//       className={selectedOption === "Cube ID" && classes.active}
//     >
//       Cube ID
//     </button>
//   </div>

//   <input
//     type="text"
//     placeholder="Recipient's Email"
//     onChange={(e) => setInputState(e.target.value)}
//   />

//   <button
//     disabled={!inputState}
//     onClick={onContinue}
//     className={classes.continue}
//   >
//     Continue
//   </button>
// </div>
