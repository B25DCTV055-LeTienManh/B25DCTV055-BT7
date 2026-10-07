import React from 'react';

function Display({ value }) {
  return (
    <div style={styles.display}>
      {value || '0'}
    </div>
  );
}

const styles = {
  display: {
    width: '100%H',
    height: '70px',
    backgroundColor: '#e0e0e0',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 15px',
    boxSizing: 'border-box',
    borderRadius: '4px 4px 0 0',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
    overflowX: 'auto',
  }
};

export default Display;