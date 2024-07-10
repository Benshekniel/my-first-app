import React, { useState } from 'react';

const ConditionalMessage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="conditional-message">
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>
  );
};

export default ConditionalMessage;
