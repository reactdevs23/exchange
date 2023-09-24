import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
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
                classes.iconContainer,
                smallIcon ? classes.alignItemsStart : classes.alignItemsCenter
              )}
            >
              <img
                className={clsx(classes.img, smallIcon && classes.small)}
                src={selectedOption.img}
                alt=""
              />
              <div>
                <div className={classes.nameContainer}>
                  <p className={classes.name}> {selectedOption.title} </p>
                  {noDesign && (
                    <>
                      {isOpen ? (
                        <BiChevronUp className={classes.arrow} />
                      ) : (
                        <BiChevronDown className={classes.arrow} />
                      )}
                    </>
                  )}{" "}
                </div>
                <p className={classes.subTitle}>{selectedOption.subTitle}</p>
              </div>
            </div>
          ) : (
            <div className={classes.bold}>
              <span>{selectedOption.title}</span>{" "}
              <span className={classes.text}>{selectedOption.subTitle}</span>
            </div>
          )}
        </div>
        {!noDesign && (
          <>
            {isOpen ? (
              <BiChevronUp className={classes.arrow} />
            ) : (
              <BiChevronDown className={classes.arrow} />
            )}
          </>
        )}
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
                        classes.iconContainer,
                        smallIcon
                          ? classes.alignItemsStart
                          : classes.alignItemsCenter
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
                        <h4 className={classes.bold}>{el.title}</h4>
                        <div className={classes.subTitle}>{el.subTitle}</div>
                      </div>
                    </div>
                  ) : (
                    <div className={classes.bold}>
                      <h4>{el.title}</h4>{" "}
                      <div className={classes.subTitle}>{el.subTitle}</div>
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
