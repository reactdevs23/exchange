import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import isEmpty from "../../components/utils/is-empty";
import { arrowDown } from "../../images/images";
import useOnClickOutside from "../../components/hooks/useOnClickOutside";
import classes from "./Dropdown.module.css";

const Dropdown = ({
  uniqueKey,
  smallIcon,
  pattern1,
  placeholder,
  options,
  noDesign,
  onSelect,
  defaultSelected,
}) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  });

  useEffect(() => {
    if (!isEmpty(defaultSelected)) {
      setSelectedOption(options[defaultSelected]);
    }
  }, [defaultSelected, options]);

  // console.log({ selectedOption });

  return (
    <div className={clsx(classes.dropdownWrap, noDesign && classes.noDesign)}>
      <div
        className={classes.dropdown}
        ref={dropdownRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          {isEmpty(selectedOption) ? (
            placeholder
          ) : pattern1 ? (
            <div
              className={clsx(
                "d-flex gap-2",
                smallIcon ? "align-items-start" : "align-items-center"
              )}
            >
              <img
                className={clsx(classes.img, smallIcon && classes.small)}
                src={selectedOption.img}
                alt=""
              />
              <div>
                <div className="fw-bold">
                  {selectedOption.title}{" "}
                  {noDesign && (
                    <img className="ms-2" src={arrowDown} alt="arrow-down" />
                  )}{" "}
                </div>
                <div className="text-light-1 mt-1">
                  {selectedOption.subTitle}
                </div>
              </div>
            </div>
          ) : (
            <div className="fw-bold">
              <span>{selectedOption.title}</span>{" "}
              <span className="text-light-1">{selectedOption.subTitle}</span>
            </div>
          )}
        </div>
        {!noDesign && <img src={arrowDown} alt="arrow-down" />}
      </div>

      <AnimatePresence>
        {isOpen && options && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={classes.options}
          >
            {options?.map((el, idx) => {
              return (
                <div
                  className={classes.option}
                  key={uniqueKey + idx}
                  onClick={() => {
                    setIsOpen(false);
                    setSelectedOption(el);
                    onSelect(el);
                  }}
                >
                  {pattern1 ? (
                    <div
                      className={clsx(
                        "d-flex gap-2",
                        smallIcon ? "align-items-start" : "align-items-center"
                      )}
                    >
                      <img
                        className={clsx(
                          classes.img,
                          smallIcon && classes.small
                        )}
                        src={el.img}
                        alt=""
                      />
                      <div>
                        <div className="fw-bold">{el.title}</div>
                        <div className="text-light-1 mt-1">{el.subTitle}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="fw-bold">
                      <div>{el.title}</div>{" "}
                      <div className="text-light-1 mt-1">{el.subTitle}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
