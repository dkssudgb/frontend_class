const Buttons = ({calc}) => {
    const addClick = () => { calc("add"); };
    const minusClick = () => { calc("minus"); };
    const multiClick = () => { calc("multi"); };
    const divideClick = () => { calc("divide"); };
    const equalClick = () => { calc("equal"); };
    return (
        <div className="buttons">
            <button onClick={}>1</button>
            <button onClick={}>2</button>
            <button onClick={}>3</button>
            <button onClick={addClick}>+</button>

            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button onClick={minusClick}>-</button>

            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button onClick={multiClick}>*</button>

            <button>C</button>
            <button>0</button>
            <button onClick={equalClick}>=</button>
            <button onClick={divideClick}>/</button>
        </div>
    )
}
export default Buttons;