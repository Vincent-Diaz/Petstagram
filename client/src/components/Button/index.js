import React from "react";
import "./style.css";

function Button(props) {
  return (
  <button className={`btn btn-${props.type}`} {...props}>{props.children}
    </button>
  );
}

export default Button;
