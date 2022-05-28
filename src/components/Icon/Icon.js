import React from "react";

const Icon = ({ name, customStyles }) => {
  return (
    <div style={customStyles}>
      <i className={`mdi mdi-${name}`} />
    </div>
  );
};

export default Icon;
