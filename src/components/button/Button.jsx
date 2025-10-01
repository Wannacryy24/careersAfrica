import React from 'react';

const Button = ({ onClick, children, type = 'button', disabled = false, style = {} }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      style={{
        padding: '10px 20px',
        backgroundColor: disabled ? '#ccc' : '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style
      }}
    >
      {children}
    </button>
  );
};

export default Button;
