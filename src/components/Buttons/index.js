import React from "react";
import "./Buttons.scss";
/**
 * @function Buttons
 **/

const Buttons = ({ className, title }) => {
    return <button className={className}>{title}</button>;
};

export default Buttons;
