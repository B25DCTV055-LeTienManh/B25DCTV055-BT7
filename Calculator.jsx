import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

function Calculator() {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (label) => {
    if (label === 'Clear') {
      setExpression('');
    } else if (label === 'Delete') {
      setExpression(prev => prev.slice(0, -1));
    } else if (label === '=') {
      try {
        // Thay thế ký hiệu x thành * để tính toán bằng eval an toàn cơ bản
        const sanitized = expression.replace(/x/g, '*');
        const result = eval(sanitized);
        setExpression(String(result));
      } catch (error) {
        setExpression('Lỗi');
      }
    } else {
      setExpression(prev => prev + label);
    }
  };

  const buttons = [
    { label: 'Clear', color: '#2e7d32' },
    { label: 'Delete', color: '#2e7d32' },
    { label: '.', color: '#2e7d32' },
    { label: '/', color: '#2e7d32' },
    { label: '7' }, { label: '8' }, { label: '9' }, { label: 'x', color: '#2e7d32' },
    { label: '4' }, { label: '5' }, { label: '6' }, { label: '-', color: '#2e7d32' },
    { label: '1' }, { label: '2' }, { label: '3' }, { label: '+', color: '#2e7d32' },
    { label: '0' }, { label: '=', color: '#2e7d32' }
  ];

  return (
    <div style={styles.calculatorContainer}>
      <h2>1. Virtual Calculator</h2>
      <div style={styles.calculatorBox}>
        <Display value={expression} />
        <div style={styles.buttonGrid}>
          {buttons.map((btn, index) => (
            <Button 
              key={index} 
              label={btn.label} 
              color={btn.color} 
              onClick={handleButtonClick} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  calculatorContainer: {
    maxWidth: '320px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
  },
  calculatorBox: {
    backgroundColor: '#ccc',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '5px',
  }
};

export default Calculator;