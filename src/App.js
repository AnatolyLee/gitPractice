import React from 'react';

const StyledComponent = () => {
  const divStyle = {
    backgroundColor: 'blue', // Светло-голубой фон
    padding: '20px',         // Внутренние отступы
    borderRadius: '10px',    // Скругленные углы
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Тень
    textAlign: 'center',     // Текст по центру
    color: '#333',           // Темный текст
    fontSize: '18px',        // Размер шрифта
    margin: '10px auto',     // Отступы снаружи
    width: '300px',          // Ширина
  };

  return (
    <div style={divStyle}>
      Коммит 3.
    </div>
  );
};

export default StyledComponent;
