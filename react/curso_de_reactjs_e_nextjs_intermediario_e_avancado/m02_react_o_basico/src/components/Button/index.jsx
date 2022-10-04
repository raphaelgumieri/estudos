import P from 'prop-types';
import React from 'react'
import './styles.css';

export default function Button({disabled = false, onClick, children}) {
  return (
    <button
    disabled={disabled}
    className='button'
    onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
}

Button.propTypes = {
  children: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
}
