import React, { useState } from 'react';
import {QRCodeCanvas} from 'qrcode.react';

function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder= "Enter text or URL"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <div>
        {inputValue && 
        <QRCodeCanvas value={inputValue} size={256} level={"H"}/>}
      </div>
    </div>
  );
}

export default QRCodeGenerator;
