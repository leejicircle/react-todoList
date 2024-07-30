import React from 'react'
import TodoItem from './TodoItem'


function TodoBoard({ todoList, removeItem }) {
  return (
    <ul>
      {todoList.map((item, index) => {
        
        return (
          <TodoItem
            key={index}
            item={item}
            index={index}
            removeItem={() => removeItem(index)}
          />
        );
      })}
    </ul>
  );
}

export default TodoBoard