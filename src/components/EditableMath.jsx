import React, { useState, useRef } from 'react';

const EditableMath = ({ defaultText="", renderFunc, inputSize=30 }) => {
  const [text, setText] = useState(defaultText);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: 'inline-block' }}>
      {isHovered ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          style={{ width:  `${inputSize}px` }}
        />
      ) : (
        <div>{renderFunc(text)}</div>
      )}
    </div>
  );
};

export default EditableMath;
