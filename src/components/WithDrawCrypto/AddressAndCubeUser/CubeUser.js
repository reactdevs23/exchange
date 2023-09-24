import React, { useState } from "react";
import classes from "./styles.module.css";
const CubeUser = () => {
  const [selectedTab, setSelectedTab] = useState("email");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [payId, setPayId] = useState("");
  const [binanceId, setBinanceId] = useState("");

  return (
    <div>
      <div className={classes.inputWrapper}>
        <div className={classes.tabs}>
          <label
            htmlFor="email"
            className={[
              classes.label,
              selectedTab.toLowerCase() === "email" && classes.activeTab,
            ].join(" ")}
            onClick={() => setSelectedTab("email")}
          >
            Email
          </label>
          <label
            htmlFor="phone"
            className={[
              classes.label,
              selectedTab.toLowerCase() === "phone" && classes.activeTab,
            ].join(" ")}
            onClick={() => setSelectedTab("phone")}
          >
            Phone
          </label>
          <label
            htmlFor="payId"
            className={[
              classes.label,
              selectedTab.toLowerCase() === "payid" && classes.activeTab,
            ].join(" ")}
            onClick={() => setSelectedTab("payid")}
          >
            Pay ID
          </label>
          <label
            htmlFor="binanceId"
            className={[
              classes.label,
              selectedTab.toLowerCase() === "binanceid" && classes.activeTab,
            ].join(" ")}
            onClick={() => setSelectedTab("binanceid")}
          >
            Binance ID
          </label>
        </div>
        {selectedTab.toLowerCase() === "email" && (
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Recipient Email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
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
          />
        )}
        {selectedTab.toLowerCase() === "binanceid" && (
          <input
            id="binanceId"
            name="binanceId"
            type="text"
            placeholder="Binance ID"
            value={binanceId}
            onChange={(e) => setBinanceId(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default CubeUser;
