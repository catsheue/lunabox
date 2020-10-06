import React from 'react';
import './Box.css';

export default function Box({text = 'Luna is cute.'}) {
  return (
    <div className="box">
      <div className="box__inner">
        {text}
      </div>
    </div>
  )
}
