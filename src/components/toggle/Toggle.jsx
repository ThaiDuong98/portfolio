import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle-container">
      <img src={require("../../img/sun.png")} alt="" className="toggle-icon" />
      <img src={require("../../img/moon.png")} alt="" className="toggle-icon" />
      <div
        className="toggle-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? "0" : "26px" }}
      ></div>
    </div>
  );
};

export default Toggle;
