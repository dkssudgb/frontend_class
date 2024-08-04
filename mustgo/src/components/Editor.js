import "./Editor.css";
import { useState, useRef, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";

const ARRAY = [0, 1, 2, 3, 4];

const Editor = ({onCreate}) => {
    const [inputs, setInputs] = useState({
        rest: '', 
        location: '',
        memo: ''
    });
    const {rest, location, memo} = inputs;
    const ref_rest = useRef();
    const ref_location = useRef();
    const ref_memo = useRef();
    const [isError, setIsError] = useState(false);
    const [star, setStar] = useState([false, false, false, false, false]);

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onSubmit = () => {
        if (!rest) {
            setIsError(true);
            ref_rest.current.focus();
            return;
        }
        if (!location) {
            setIsError(true);
            ref_location.current.focus();
            return;
        }
        if (!memo) {
            setIsError(true);
            ref_memo.current.focus();
            return;
        }
        onCreate(rest, location, memo);
        setInputs("");
    };
    
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    const starScore = index => {
        let score = [...star]
        for (let i = 0; i > 5; i++) {
            score[i] = i <= index ? true:false;
        }
        setStar(score);
    };

    return (
        <div className="Editor">
            <h3>입력</h3>
            <div className="editor_wrapper">
                <p>식당 이름</p>
                <input
                    ref={ref_rest}
                    id="rest"
                    name="rest"  
                    value={rest}
                    onChange={onChange}
                    placeholder={isError? "내용을 입력하세요" : "식당 이름 입력"} 
                    style={{borderColor: isError? "red" : "initial"}}
                    onKeyDown={onKeyDown}
                />
            </div>
            <div className="editor_wrapper">
                <p>별점</p>
                {ARRAY.map((el, index) => (<FaStar key={index} size="14" />))}
                {/* {[...Array(5 - star).map((a, i) => (
                    <FaRegStar className="star-lg" key={i} onClick={() => setStar(star + i + 1)} />
                    
                ))]} */}
            </div>
            <div className="editor_wrapper">
                <p>식당 위치</p>
                <input
                    ref={ref_location}
                    id="location"
                    name="location"
                    value={location}
                    onChange={onChange}
                    placeholder={isError? "내용을 입력하세요" : "식당 위치 입력"} 
                    style={{borderColor: isError? "red" : "initial"}}
                    onKeyDown={onKeyDown}
                />
            </div>
            <div className="editor_wrapper">
                <p>한줄메모</p>
                <input
                    ref={ref_memo}
                    id="memo"
                    name="memo"
                    value={memo}
                    onChange={onChange}
                    placeholder={isError? "내용을 입력하세요" : "메모..."} 
                    style={{borderColor: isError? "red" : "initial"}} 
                    onKeyDown={onKeyDown}/>
            </div>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;