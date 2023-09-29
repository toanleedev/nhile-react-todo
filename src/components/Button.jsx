import React from 'react'

function Button({name = 'Button', onClick}) {
  return (
    <button onClick={onClick} className="button">
      {name}
    </button>
  )
}

export default Button