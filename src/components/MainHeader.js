import React from 'react';
import Header1 from './Header1';
import Header2 from './Header2';
import header2 from "../assets/header2.png";

export default function MainHeader() {
  return (
    <div>
      <Header1 />
      <img 
        src={header2} 
        alt="Header Image" 
        style={{
          width: '100%',
          height: 'auto',
        }} 
      />
      <Header2 />
    </div>
  );
}
