import React from 'react'

function TextInput({onChange}) {
  return (
    <>
      <input type="text" onChange={onChange} className='text-input'/>
    </>
  )
}

export default TextInput