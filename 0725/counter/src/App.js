import './App.css';
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const onIncrease = () => {
        setCount(count + 1);
    };
    const onDecrease = () => {
        if (count-1 < 0)
            setCount(0)
        else
            setCount(count - 1);
    };

    return (
    <div className="App">
        <h1>COUNTER</h1>
        <section>
            <Viewer count = {count} />
        </section>
        <section>
            <Controller onIncrease={onIncrease} onDecrease={onDecrease}/>
        </section>
    </div>
    );
}

export default App;
