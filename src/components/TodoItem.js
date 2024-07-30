import React from 'react'


function TodoItem({item,removeItem}) {
  return (
    <li className='todo-items'>
      {item}
      <button onClick={removeItem}>X</button>
    </li>
  )
}

export default TodoItem