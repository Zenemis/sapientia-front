import { MathJax } from 'better-react-mathjax';
import React, { useState, useRef } from 'react';

const EditableMath = ({ defaultText = "", renderFunc, handleInput, inputSize = 30, style }) => {
  const [text, setText] = useState(defaultText);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef(null); // Ref to input element

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (inputRef.current) {
      inputRef.current.focus(); // Set focus on input when hovered
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    handleInput(text); // Call handleInput to update parent with input text
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: 'inline-block', ...style }}>
      {isHovered ? (
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleChange}
          style={{ width: `${inputSize}px` }}
        />
      ) : (
        <MathJax>{renderFunc(text)}</MathJax>
      )}
    </span>
  );
};

export default EditableMath;
