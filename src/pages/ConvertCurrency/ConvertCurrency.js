import clsx from "clsx";
import { useState } from "react";
import Slider from "react-input-slider";
import Checkbox from "../../components/Checkbox/Checkbox";
import { cake, eth, transfer } from "../../images/images";
import Dropdown from "../../components/Dropdown/Dropdown";
import classes from "./ConvertCurrency.module.css";

const Convert = () => {
  const [state, setState] = useState({ x: 10, y: 10 });
  const [isReversed, setIsReversed] = useState(false);

  return (
    <div className="mt-80">
      <div className={classes.cardsContainer}>
        <div>
          <h4 className="fs-4 mb-4 text-center">Convert Currency/Crypto</h4>

          <div className={classes.card}>
            <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between gap-3 mb-46">
              <div className="fw-bold fs-5"> Choose Wallet</div>
              <div className="d-flex gap-3">
                <Checkbox label="Sport" />
                <Checkbox label="Funding" />
              </div>
            </div>

            <div
              className={clsx(
                "d-flex",
                isReversed ? "flex-column-reverse" : "flex-column"
              )}
            >
              <div className={classes.inner}>
                <div className="d-flex flex-column flex-sm-row gap-4 justify-content-between align-items-sm-center">
                  <div className="text-light-1">From</div>
                  <div className="text-light-1">Balance: 254.22 CAKE</div>
                </div>

                <div className="mt-3">
                  <div className="d-flex flex-column flex-sm-row gap-4 justify-content-between align-items-sm-center">
                    {/* <div className="d-flex align-items-center gap-2 cursor-pointer">
                      <img src={cake} alt="cake" />

                      <div>
                        <div className="fw-bold">
                          CAKE{" "}
                          <img className="ms-2" src={arrowDown} alt="arrow" />
                        </div>
                        <div className="text-light-1">Pancakeswap</div>
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

                    <div className="d-flex align-items-center gap-2">
                      <div className="fs-5 fw-bold">200</div>
                      <div className="text-light-1">≈ $1,125.27</div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="py-4 text-center c-pointer"
                onClick={() => setIsReversed(!isReversed)}
              >
                <img src={transfer} alt="eth" />
              </div>

              <div className={classes.inner}>
                <div className="d-flex flex-column flex-sm-row gap-4 justify-content-between align-items-sm-center">
                  <div className="text-light-1">To</div>
                  <div className="text-light-1">Balance: 0 ETH</div>
                </div>

                <div className="mt-3">
                  <div className="d-flex flex-column flex-sm-row gap-4 justify-content-between align-items-sm-center">
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

                    <div className="d-flex align-items-center gap-2">
                      <div className="fs-5 fw-bold">0.5</div>
                      <div className="text-light-1">≈ $1,125.27</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button className={classes.btnBlue}>Convert</button>
            </div>
          </div>
        </div>

        {/* <div>
          <h4 className="fs-4 mb-4 text-center">&nbsp;</h4>
          <div className={classes.card}>
            <div
              className={clsx(
                classes.inner,
                "d-flex justify-content-between align-items-center mb-2"
              )}
            >
              {/* <div className="text-light-1">Price</div> */}
        {/* <input
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
            > */}
        {/* <div className="text-light-1">Amount</div> */}
        {/* <input
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
            > */}
        {/* <div className="text-light-1">Total</div> */}

        {/* <input
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
        </div> */}
      </div>
    </div>
  );
};

export default Convert;
