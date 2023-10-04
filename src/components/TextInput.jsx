import React from 'react'

function TextInput({onChange, value}) {
  return (
    <>
      <input type="text" onChange={onChange} value={value} className='text-input'/>
    </>
  )
}

export default TextInput