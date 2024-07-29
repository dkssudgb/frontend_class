import "./Body.css"
import { useState } from "react";

function Body({age, name, location, food}) {
    // 1. <input> 태그 : 텍스트 입력 시마다 콘솔에 출력
    // const handleOnChange = (e) => {
    //     console.log((e.target.value));
    // }

    // 2. <input> 태그 : State 사용
    const [text, setText] = useState("");

    // 3. <input> 태그 : 날짜 입력하기
    const [date, setDate] = useState("");

    const handleOnChange = (e) => {
        setText(e.target.value);

        console.log("변경된 값: ", e.target.value);
        setDate(e.target.value);
    }


    return (
        <div>
            <h1>input 태그</h1>
            {/*<h2>텍스트 입력 시마다 콘솔에 출력</h2>*/}
            {/*<input onChange={handleOnChange}/>*/}
            {/*<br/>*/}
            <h2>State 이용</h2>
            <input value={text} onChange={handleOnChange}/>
            <div>{text}</div>
            <br/>
            <h2>날짜 입력하기</h2>
            <input type="date" value={date} onChange={handleOnChange} />
        </div>
    )
}

export default Body;