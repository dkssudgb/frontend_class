import './App.css';
import Calculator from './components/Calculator';
import TestComp from './components/TestComp';
import ThemeProvider from './components/ThemeProvider';

function App() {
  return (
    <div className="App">
      <TestComp />
      <br/> <hr/>
      <Calculator />
      <br /> <hr/>
      <ThemeProvider />
    </div>
  );
}

export default App;
