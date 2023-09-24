import React, { useState } from "react";
import Convert from "../../components/ConvertCurrency/Convert";
import ChooseCurrency from "../../components/ConvertCurrency/ChooseCurrency/ChooseCurrency";
import ConvertSuccesFull from "../../components/ConvertCurrency/ConvertSuccesFull/ConvertSuccesFull";

const ConvertCurrency = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [showChooseCurrencyModal, setShowChooseCurrencyModal] = useState(false);
  return (
    <>
      {selectedCurrency ? (
        <ConvertSuccesFull />
      ) : (
        <Convert setChooseCurrencyModal={setShowChooseCurrencyModal} />
      )}
      {showChooseCurrencyModal && (
        <ChooseCurrency
          setSelectedCurrency={setSelectedCurrency}
          modal={showChooseCurrencyModal}
          setModal={setShowChooseCurrencyModal}
        />
      )}
    </>
  );
};

export default ConvertCurrency;
