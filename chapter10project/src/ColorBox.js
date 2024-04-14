import React from 'react';

const ColorBox = ({name , hexname , isDark}) => {
  return (
    <div className="colorBoxContainer"> {/* Apply CSS class to center align */}
      <div className="colorBox"
      style={{
        backgroundColor:name,
        color:isDark ? "black": "white"
      }} 
      >
        <p>{name?name: "No Color"}</p>
        <p>{hexname?hexname:null}</p>
      </div> {/* Empty div to style as a box */}
    </div>
  );
}
ColorBox.defaultProps = {
    name:"Empty color value"
}

export default ColorBox;
