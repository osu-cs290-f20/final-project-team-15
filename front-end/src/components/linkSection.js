import React from "react";

function linkSection(props) {
  return (
    <div style={linkSectionStyle}>
      <h1 style={hSytle}>Link Section</h1>
    </div>
  );
}

const linkSectionStyle = {
  padding: 10,
  margin: 10,
  backgroundColor: "#242526",
  borderRadius: 10
};

const hSytle = {
  color: "#FFFFFF"
};

export default linkSection;
