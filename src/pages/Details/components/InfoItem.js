import React from "react";

export const InfoItem = ({ title, info }) => {
  if (!info) return;

  return (
    <div className="info-item">
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
};

export default InfoItem;
