import "./Header.css";

const Header = () => { 
    const week = new Array(["일", "월", "화", "수", "목", "금", "토"]);
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const dayname = week[today.getDay()];

    return (
        <div className="Header">
            <p>{year+"년 " + month+"월 " + day+"일 " + dayname+"요일"}</p>
            <h1>😋나만의 맛집 리스트🍴</h1>
        </div>
    );
};

export default Header;
