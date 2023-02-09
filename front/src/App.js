import logo from "./logo.svg";
import Header from "./components/Header";
import Help from "./components/Help";
import Main from "./components/Main";
import './styles/reset.css'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Help />
    </div>
  );
}

export default App;
