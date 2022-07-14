import React, { useState } from "react";
import sun from "./styles/aaasun.svg";
import "./styles/themetoggle.css";
const ThemeToggle = () => {
  const [theme, setTheme] = useState(false);
  const clickHandler = () => {
    setTheme(!theme);
  };
  return (
    <button className="themeButton">
      <img
        src={sun}
        onClick={clickHandler}
        alt="change theme"
        className="buttonImg"
      />
    </button>
  );
};

export default ThemeToggle;
