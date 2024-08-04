import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef } from "react";

function App() {
  const [goto, setGoto] = useState([]);
  const idRef = useRef(0);

  const onCreate = (rest, rating, location, memo) => {
    const newItem = {
      id: idRef.current,
      name: rest,
      rating,
      location, 
      memo,
    };
    setGoto([newItem, ...goto]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setGoto(
      goto.map((it) => it.id === targetId ? {...it, isDone: !it.isDone} : it
      )
    );
  };

  const onDelete = (targetId) => {
    setGoto(goto.filter((it) => it.id !== targetId));
  };
  
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate}/>
      <List goto={goto} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
