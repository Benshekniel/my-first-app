import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`Input value: ${inputValue}`);
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter some text"
      />
      <button onClick={handleButtonClick}>Show Alert</button>
    </div>
  );
};

export default Form;
_