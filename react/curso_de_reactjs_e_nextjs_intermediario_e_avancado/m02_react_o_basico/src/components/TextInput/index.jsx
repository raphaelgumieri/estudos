import React from 'react'
import './styles.css'

export default function TextInput({handleChange, searchValue}) {
  return (
    <input className="text-input" type="search" onChange={handleChange} value={searchValue} placeholder="Type your search" />
  )
}
