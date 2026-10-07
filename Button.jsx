import React from 'react';

function Button({ label, onClick, color }) {
  return (
    <button 
      onClick={() => onClick(label)} 
      style={{ ...styles.button, backgroundColor: color || '#4CAF50' }}
    >
      {label}
    </button>
  );
}

const styles = {
  button: {
    padding: '15px',
    fontSize: '18px',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background 0.2s',
  }
};

export default Button;