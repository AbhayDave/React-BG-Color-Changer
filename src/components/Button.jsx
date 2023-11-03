import React from "react";

const Button = (props) => {
  const designprop = `bg-${props.label.toLowerCase()}-700 text-white h-2/3  rounded-3xl outline-none py-2 px-5`;

  return (
    <button className={designprop} onClick={(e) => props.onClick(props.label)}>
      {props.label}
    </button>
  );
};

export default Button;
