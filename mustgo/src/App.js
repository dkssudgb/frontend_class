import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const idRef = useRef(0);

  const onCreate = (name, location, memo) => {
    const newItem = {
      id: idRef.current,
      name,
      location, 
      memo,
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
      <Editor onCreate={onCreate}/>
      <List todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;

{/* <Header : 제목>

<Editor : 입력칸>
- 식당 이름
- 별점
- 식당 위치
- 메모

<List : 리스트 확인 및 검색>
- 모든 내용에 대해 글자 기준 검색
	<Item : 각 리스트 항목>
	- 식당이름        별점    삭제/수정
	  위치
	  메모 */}
