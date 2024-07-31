import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { useState, useRef } from "react";

// const mockTodo = [
//   {
//     id: 0,
//     isDone: false,
//     content: "React 공부하기",
//     createDate: new Date().getTime() },
//   {
//     id: 1,
//     isDone: false,
//     content: "빨래 널기",
//     createDate: new Date().getTime() },
//   {
//     id: 2,
//     isDone: false,
//     content: "노래 연습하기",
//     createDate: new Date().getTime() },
// ]

function App() {
  const [todo, setTodo] = useState([]);
  const idRef = useRef(0);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content, 
      isDate: false,
      createDate: new Date().getTime()
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => it.id === targetId ? {...it, isDone: !it.isDone} : it
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };
  
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
