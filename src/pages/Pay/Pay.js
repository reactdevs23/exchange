import React, { useState } from "react";
import Pay from "../../components/Pay/Pay";
import PaymentSuccesFull from "../../components/Pay/PaymentSuccesFull/PaymentSuccesFull";
import classes from "./Pay.module.css";
const Pays = () => {
  const [paymentSuccessFull, setPaymentSuccessFull] = useState(false);
  return (
    <div className={["mainWrapper", classes.mainWrapper].join(" ")}>
      {paymentSuccessFull ? (
        <PaymentSuccesFull />
      ) : (
        <Pay setPaymentSuccessFull={setPaymentSuccessFull} />
      )}
    </div>
  );
};

export default Pays;
