import "./TodoEditor.css";
import { useState, useRef } from "react";

const TodoEditor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const [isError, setIsError] = useState(false);
    const onChangeContent = (e) => {
        setContent(e.target.value);
        if (isError) {
            setIsError(false);
        }
    };
    const onSubmit = () => {
        if (!content) {
            setIsError(true);
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };
    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 📝</h4>
            <div className="editor_wrapper">
                <input
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    placeholder={isError? "내용을 입력하세요" : "새로운 Todo..."} 
                    style={{borderColor: isError? "red" : "initial"}} 
                    onKeyDown={onKeyDown}/>
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;