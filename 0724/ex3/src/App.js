import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
    // 1. 변수 하나씩 전달
    // const name = "소프트"

    // 2. 스프레드 연산자로 여러 개의 값 전달
    const person = {
        name: "이혜빈",
        age: 25,
        location: "대구시",
        food: ["치킨 ", "차돌된장찌개 ", "대창덮밥 "]
    };

    return (
        <div className="App">
            <Header/>
            {/*<Body name={name} location={"대구시"}/>*/}
            <Body {...person} />
            <Footer/>
        </div>
    );
}

export default App;
