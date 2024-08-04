import "./Editor.css";
import React from "react";
import { useState, useRef } from "react";

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
    const [rating, setRating] = useState(0);

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
        onCreate(rest, rating, location, memo);
        setInputs({
            rest: "",
            location: "",
            memo: ""
        });
        setRating(0);
    };
    
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    const handleClick = (value) => {
        setRating(value);
    }

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
                <div className="star_rating">
                    {[1, 2 ,3 ,4 ,5].map((star) => (
                        <React.Fragment key={star}>
                            <input type="radio" id={`star${star}`} name="rating" value="star"
                                checked={rating === star}
                                onChange={() => handleClick(star)}
                            />
                            <label htmlFor={`star${star}`} title={`${star} stars`}
                                   className={rating >= star ? 'filled' : 'empty'}
                            />
                        </React.Fragment>
                    ))}
                </div>
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
                    placeholder={"메모..."}
                    onKeyDown={onKeyDown}/>
            </div>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;