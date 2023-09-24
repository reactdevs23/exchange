import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Dropdown from "../../Dropdown/Dropdown";
import { tether } from "../../../images/images";

import SelectNetworkModal from "../SelectNetworkModal/SelectNetworkModal";
import classes from "./styles.module.css";
const Address = ({ selectedNetwork, setSelectedNetwork }) => {
  const [address, setAddress] = useState("");
  const [showSelectNetworkModal, setShowSelectNetworkModal] = useState();
  return (
    <>
      {" "}
      <div className={classes.inputWrapper}>
        <label htmlFor="address" className={classes.addressTitle}>
          Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={classes.input}
        />
      </div>
      <div className={classes.inputWrapper}>
        <h4 className={classes.addressTitle}>Network</h4>
        {/* <Dropdown
          uniqueKey="select-coin"
          pattern1
          placeholder="Select Withdrawal Network"
          // options={[
          //   {
          //     img: tether,
          //     title: "USDT",
          //     subTitle: "Tether",
          //   },
          //   {
          //     img: tether,
          //     title: "USDT",
          //     subTitle: "Tether",
          //   },
          //   {
          //     img: tether,
          //     title: "USDT",
          //     subTitle: "Tether",
          //   },
          // ]}
          onSelect={(val) => {}}
        /> */}
        <div
          className={classes.selectNetwork}
          onClick={() => setShowSelectNetworkModal(true)}
        >
          {selectedNetwork ? (
            <div className={classes.box}>
              <p className={classes.networkName}>
                {selectedNetwork.networkName}{" "}
              </p>
              <p className={classes.info}>{selectedNetwork.info}</p>
            </div>
          ) : (
            "Select Network"
          )}

          <BiChevronDown className={classes.arrow} />
        </div>
      </div>
      {showSelectNetworkModal && (
        <SelectNetworkModal
          selectedNetwork={selectedNetwork}
          setSelectedNetwork={setSelectedNetwork}
          modal={showSelectNetworkModal}
          setModal={setShowSelectNetworkModal}
        />
      )}
    </>
  );
};

export default Address;
