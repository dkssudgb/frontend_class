import {useState} from "react";
import {useMemo} from "react";


function Calculator() {
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState(0);

    const calculatorSquare = () => {
        setResult(number * number);
    };

    const handleInputChange = (e) => {
        setNumber(e.target.value);
    };

    const squareNumberMemo = useMemo(() => {
        return result;
    }, [result]);

    return (
        <div>
            <h4>테스트 컴포넌트 : SQUARE</h4>
            <div>
                <input type="number" 
                    value={number}
                    onChange={handleInputChange}
                    placeholder="숫자를 입력해주세요"
                />
                <button onClick={calculatorSquare}>Calculator Square</button>
            </div>
            <div>
                <h5>Square of {number} : {squareNumberMemo}</h5>
            </div>
        </div>
    );
}

export default Calculator;
