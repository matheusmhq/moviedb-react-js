import React from "react";

const Icon = ({ name, customClass, customStyles }) => {
  return (
    <div class={customClass} style={customStyles}>
      <i className={`mdi mdi-${name}`} />
    </div>
  );
};

export default Icon;
