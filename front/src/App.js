import "./reset.css";

import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import Quiz from "./components/Quiz/Quiz";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Quiz />
      <Help />
    </div>
  );
}

export default App;
