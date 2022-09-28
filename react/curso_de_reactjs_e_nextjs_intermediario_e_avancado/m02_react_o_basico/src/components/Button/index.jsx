import React from 'react'
import './styles.css';

export default function Button({disabled, onClick, children}) {
  return (
    <button
    disabled={disabled}
    className='button'
    onClick={onClick}>
      {children}
    </button>
  )
}
