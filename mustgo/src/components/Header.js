import "./Header.css";

const Header = () => { 
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let weekday = week[today.getDay()];

    return (
        <div className="Header">
            <p>{year+"년 " + month+"월 " + day+"일 " + weekday+"요일"}</p>
            <h1>😋나만의 맛집 리스트🍴</h1>
        </div>
    );
};

export default Header;
