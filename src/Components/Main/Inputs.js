import React from "react";

const inputs = ({type, title, value, step, min, max, onChange}) => {
  return (
    <div className="inputs">
      <label htmlFor={type} className="title">
        {title}
      </label>
      <label htmlFor={type} className="value">
      {(type=="interest") ? '' : "$"} {value} {(type=="interest") ? '%' : ""}
      </label>
      <input
        type="range"
        id={type}
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={onChange}
      />
      <div className="ranges">
        <p className="min-val">{(type=="interest") ? '' : "$"} {min} {(type=="interest") ? '%' : ""}</p>
        <p className="max-val">{(type=="interest") ? '' : "$"} {max} {(type=="interest") ? '%' : ""}</p>
      </div>
    </div>
  );
};

export default inputs;
