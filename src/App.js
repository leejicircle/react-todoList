import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoBoard from './components/TodoBoard';


// localStorage 활용해서 새로고침해도 값이 남아있도록
// 어떻게 해야할지 확인하기
function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState(() => {
    const saveTodoList = localStorage.getItem('todoList')
    return saveTodoList ? JSON.parse(saveTodoList) : []
  });


    useEffect(() => {
      localStorage.setItem('todoList',JSON.stringify(todoList))
    },[todoList])

  const addItem = (event) => {
   
    if (inputValue.trim() === '') return; 
    setTodoList([...todoList,inputValue])
    setInputValue('')
  }
  const EnterKeydown = (event) => {
    if (event.key === 'Enter') {
      addItem()
    }
  }
  const removeItem = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  };


  return (
    <div className="App">
     <Header />
     <div className="todo">
      <input 
        type="text" 
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={EnterKeydown} 
      />
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList} removeItem={removeItem} />
     </div>
    </div>
  );
}

export default App;
