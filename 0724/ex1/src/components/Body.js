function Body() {
    const number = 1;
    const numA = 10;
    const numB = 20;

    const strA = "안녕";
    const strB = "리액트";

    const boolA = true;
    const boolB = false;

    const objA = {name: "이혜빈", age: 25};

    return (
        <div>
            <h1>body</h1>
            <h1>{number}</h1>
            <h1>{numA + numB}</h1>
            <h1>{strA + strB}</h1>
            <h1>{numA + strB}</h1>
            <h1>{strA + numA}</h1>
            <h1>{String(boolA && boolB)}</h1>
            <h1>{objA.name + " " + objA.age}</h1>
        </div>
    );
}

export default Body;