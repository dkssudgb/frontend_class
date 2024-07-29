function Body() {
    const name = "이혜빈";
    const job = "개발자";
    const salary = 6000;
    const percent = 20;
    const incentive = salary * (20 / 100)

    const num = 8

    // if문 활용
    // if (num % 2 === 0) {
    //     return <h2>{num}은(는) 짝수입니다.</h2>;
    // } else {
    //     return <div><h2>{num}은(는) 홀수입니다.</h2></div>;
    // }

    return (
        <div>
            <h1>{"안녕하세요. 저의 이름은 " + name + "입니다."}</h1>
            <h2>{"저의 직업은" + job + " 입니다."}</h2>
            <h2>{"저의 연봉은 " + salary + " 입니다."}</h2>
            <h2>{"년간 인센티브는 연봉의 " + percent + "%를 받아서 " + incentive + " 입니다."}</h2>
            <br/>

            {/*삼항연산자*/}
            <h2>
                {num}은(는) {num % 2 === 0 ? "짝수" : "홀수"}입니다.
            </h2>
        </div>
    );
}

export default Body;