import React from 'react'

function Todo({title}) {
  return (
    <div className='todo'>
      <input type="checkbox" name="checkbox" className='todo-checkbox'/>
      <span className='todo-title'>{title}</span>
    </div>
  )
}

export default Todo