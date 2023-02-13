import './reset.css';

import logo from "./logo.svg";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import Main from "./components/Main/Main";
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
