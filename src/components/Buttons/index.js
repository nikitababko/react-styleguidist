import React from "react";
import "./Buttons.scss";
/**
 * @function Buttons
 **/

const style = {
    width: "100px",
};

const Buttons = ({ className, title }) => {
    return (
        <button className={className} size={style}>
            {title}
        </button>
    );
};

export default Buttons;
