import {useReducer} from "react";

function reducer(state, action) {
    switch(action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE" :
            if (state - action.data < 0)
                return state;
            return state - action.data;
        case "RESET":
            return 0;
        default:
            return state;
    }
}

function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0);
    
    return (
        <div>
            <h4>테스트 컴포넌트 : COUNT</h4>
            <div>
                <b>{count}</b>
            </div>
            <div>
                <button onClick={() => dispatch({type: "DECREASE", data: 1})}>-</button>
                <button onClick={() => dispatch({type: "INCREASE", data: 1})}>+</button>
                <button onClick={() => dispatch({type: "RESET"})}>reset</button>
            </div>
        </div>
    );
}

export default TestComp;