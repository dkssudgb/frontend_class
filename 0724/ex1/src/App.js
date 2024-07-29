import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// function Header() {
//   return(
//       <header>
//         <h1>header</h1>
//       </header>
//   );
// }
// Header.js로 이동

function App() {
  return (
    <div className="App">
        <Body/>
        <Header/>
        <Footer/>
    </div>
  );
}

export default App;
