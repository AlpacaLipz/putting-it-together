import logo from './logo.svg';
import Display from "./components/Display";
import './App.css';

function App() {
  return (
    <div className="App">
      <Display name="Doe, Jane" age={45} Hcolor="Black" />
      <Display name="Smith, John" age={88} Hcolor="Brown" />
      <Display name="Fillmore, Millard " age={50} Hcolor="Brown" />
      <Display name="Smith, Maria" age={62} Hcolor="Brown" />
    </div>
  );
}

export default App;
