import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import useOnClickOutside from "../hooks/useOnClickOutside";
import classes from "./Options.module.css";

const Options = ({ uniqueKey, onSelect, options, children }) => {
  const [isOption, setIsOption] = useState(false);
  const dropdownRef = useRef();

  useOnClickOutside(dropdownRef, () => {
    setTimeout(() => {
      setIsOption(false);
    }, 200);
  });

  return (
    <div className={classes.dropdownsWrap}>
      <div
        className={classes.dropdown}
        ref={dropdownRef}
        onClick={() => setIsOption(!isOption)}
      >
        {children}
      </div>

      <AnimatePresence>
        {isOption && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            key={uniqueKey}
            className={classes.options}
          >
            {options.map((el, idx) => {
              return (
                <Link
                  to={el.to}
                  className={classes.option}
                  key={uniqueKey + idx}
                  onClick={() => {
                    setIsOption(!isOption);
                    if (onSelect) onSelect();
                  }}
                >
                  {el.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Options;
