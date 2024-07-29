import "../Body.css"

function Body({age, name, location, food}) {
    // 1. 하나의 값 전달하기
    // function Body(props) 이용
    // console.log(props);
    // return <div className="body">{props.name}</div>

    // 2. 여러 개의 값 전달하기
    // function Body(props) 이용
    // const {name, location} = props;
    // return (
    //     <div className="body">
    //         <h2>{name}은 {location}에 거주합니다.</h2>
    //     </div>
    // );

    // 버튼 이벤트 사용하기
    function handleOnClick(e) {
        alert(e.target.name + " clicked!");
    }

    // 3. 인수 값으로 전달
    return (
        <div className="body">
            <h2>{age}세 {name}은 {location}에 거주합니다.</h2>
            <br/>
            <h3>{food.length}개의 음식을 좋아합니다.</h3>
            <p>{food}</p>

            <br/>
            <button name="A Button" onClick={handleOnClick}>A버튼</button>
            <button name="B Button" onClick={handleOnClick}>B버튼</button>
        </div>
    );
}

export default Body;