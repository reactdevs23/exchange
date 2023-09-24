import clsx from "clsx";
import { useState } from "react";
import Slider from "react-input-slider";
import Checkbox from "../Checkbox/Checkbox";
import { cake, eth, transfer } from "../../images/images";
import Dropdown from "../Dropdown/Dropdown";
import classes from "./Convert.module.css";

const Convert = ({ setChooseCurrencyModal }) => {
  const [state, setState] = useState({ x: 10, y: 10 });
  const [isReversed, setIsReversed] = useState(false);
  const [sport, setSport] = useState(false);
  const [funding, setFunding] = useState(false);
  return (
    <>
      <section className={classes.wrapper}>
        <div className={classes.cardsContainer}>
          <h4 className={classes.heading}>Convert Currency/Crypto</h4>

          <div className={classes.card}>
            <div className={classes.spaceBetween}>
              <div className={classes.title}> Choose Wallet</div>
              <div className={classes.sportAndFunding}>
                <Checkbox
                  label="Sport"
                  checked={sport}
                  onClick={() => {
                    setFunding(false);
                    setSport(true);
                  }}
                />
                <Checkbox
                  label="Funding"
                  checked={funding}
                  onClick={() => {
                    setFunding(true);
                    setSport(false);
                  }}
                />
              </div>
            </div>

            <div
              className={clsx(
                classes.outerBox,

                isReversed
                  ? classes.outerBoxColumnReverse
                  : classes.outerBoxColumn
              )}
            >
              <div className={classes.inner}>
                <div className={classes.keyValue}>
                  <p className={classes.text}>From</p>
                  <p className={classes.text}>Balance: 254.22 CAKE</p>
                </div>

                <div className={classes.keyValueWrapper}>
                  <div className={classes.keyValue}>
                    {/* <div className="d-flex align-items-center gap-2 cursor-pointer">
                      <img src={cake} alt="cake" />

                      <div>
                        <div className="fw-bold">
                          CAKE{" "}
                          <img className="ms-2" src={arrowDown} alt="arrow" />
                        </div>
                        <div className={classes.text}>Pancakeswap</div>
                      </div>
                    </div> */}

                    <Dropdown
                      uniqueKey="wallte-choose-coin"
                      pattern1
                      noDesign
                      placeholder="Choose Coin"
                      defaultSelected={0}
                      options={[
                        {
                          img: cake,
                          title: "USDT",
                          subTitle: "Tether",
                        },
                        {
                          img: eth,
                          title: "ETH",
                          subTitle: "Ethereum",
                        },
                      ]}
                      onSelect={(val) => {}}
                    />

                    <div className={classes.valueContainer}>
                      <h3 className={classes.value}>200</h3>
                      <h3 className={classes.amount}>≈ $1,125.27</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={classes.iconContainer}
                onClick={() => setIsReversed(!isReversed)}
              >
                <img src={transfer} alt="eth" />
              </div>

              <div className={classes.inner}>
                <div className={classes.keyValue}>
                  <div className={classes.text}>To</div>
                  <div className={classes.text}>Balance: 0 ETH</div>
                </div>

                <div className={classes.keyValueWrapper}>
                  <div className={classes.keyValue}>
                    {/* <div className="d-flex align-items-center gap-2 cursor-pointer">
                      <img src={eth} alt="eth" />

                      <div>
                        <div className="fw-bold">
                          ETH
                          <img className="ms-2" src={arrowDown} alt="arrow" />
                        </div>
                        <div className="text-light-1">Ethereum</div>
                      </div>
                    </div> */}

                    <Dropdown
                      uniqueKey="wallete-choose-coin"
                      pattern1
                      noDesign
                      placeholder="Choose Coin"
                      defaultSelected={0}
                      options={[
                        {
                          img: eth,
                          title: "ETH",
                          subTitle: "Ethereum",
                        },
                        {
                          img: cake,
                          title: "USDT",
                          subTitle: "Tether",
                        },
                      ]}
                      onSelect={(val) => {}}
                    />

                    <div className={classes.valueContainer}>
                      <div className={classes.value}>0.5</div>
                      <div className={classes.amount}>≈ $1,125.27</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className={classes.btnBlue}
              onClick={() => setChooseCurrencyModal(true)}
            >
              Convert
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Convert;
{
  /* <div>
          <h4 className="fs-4 mb-4 text-center">&nbsp;</h4>
          <div className={classes.card}>
            <div
              className={clsx(
                classes.inner,
                "d-flex justify-content-between align-items-center mb-2"
              )}
            >
              {/* <div className="text-light-1">Price</div> */
}
{
  /* <input
                type="number"
                className={classes.input}
                placeholder="Price"
              />
              <div>25252.1 USDT</div>
            </div>
            <div
              className={clsx(
                classes.inner,
                "d-flex justify-content-between align-items-center"
              )}
            > */
}
{
  /* <div className="text-light-1">Amount</div> */
}
{
  /* <input
                type="number"
                className={classes.input}
                placeholder="Amount"
              />
              <div>BTC</div>
            </div>

            <div className="my-4 relative">
              <div className={classes.sliderDots}>
                <div
                  className={clsx(
                    classes.sliderDot,
                    state.x >= 0 && classes.active
                  )}
                />
                <div
                  className={clsx(
                    classes.sliderDot,
                    state.x >= 25 && classes.active
                  )}
                />
                <div
                  className={clsx(
                    classes.sliderDot,
                    state.x >= 50 && classes.active
                  )}
                />
                <div
                  className={clsx(
                    classes.sliderDot,
                    state.x >= 75 && classes.active
                  )}
                />
                <div
                  className={clsx(
                    classes.sliderDot,
                    state.x >= 100 && classes.active
                  )}
                />
              </div>

              <Slider
                axis="x"
                x={state.x}
                onChange={({ x }) => setState((state) => ({ ...state, x }))}
                styles={{
                  track: {
                    backgroundColor: "transparent",
                    width: "calc(100% - 24px)",
                    margin: "0 auto",
                    display: "block",
                    zIndex: 1,
                  },
                  active: {
                    backgroundColor: "#6C62E2",
                  },
                  thumb: {
                    width: 30,
                    height: 30,
                    border: "8px solid #6C62E2",
                  },
                  disabled: {
                    opacity: 0.5,
                  },
                }}
              />
            </div>

            <div
              className={clsx(
                classes.inner,
                "d-flex justify-content-between align-items-center mb-2"
              )}
            > */
}
{
  /* <div className="text-light-1">Total</div> */
}

{
  /* <input
                type="number"
                className={classes.input}
                placeholder="Total"
              />
              <div>USDT</div>
            </div>

            <div className="text-light-1 mt-4 mb-2">Fee</div>
            <div className="">
              <button className={classes.btnGreen}>Buy BTC</button>
            </div>
          </div>
        </div> */
}
