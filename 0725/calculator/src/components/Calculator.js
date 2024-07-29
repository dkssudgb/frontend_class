import Buttons from "./Buttons";
import {useState} from "react";

const Calculator = () => {
    const [input, setInput] = useState("");
    const calc = (type) => {
        if (type === "add") {

        } else if (type === "minus") {

        } else if (type === "multi") {

        } else if (type === "divide") {

        } else if (type === "equal") {

        } else if (type === "reset") {
            setInput("")
        }
    }

    return (
        <div className="calculator">
            <div className="display">
                <input type="text" value={input} readOnly/>
                <div className="result">0</div>
            </div>
            <div className="button">
                <Buttons calc={calc}/>
            </div>
        </div>
    );
}
export default Calculator;