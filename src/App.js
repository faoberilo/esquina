import './App.css';
import Header from '../src/img/header.jpg'
import p1 from '../src/img/01.jpg'
import p2 from '../src/img/02.jpg'

function App() {
  return (
    <div className="app">
      <img src={Header} alt='logo do site'/>
      <img src={p1} alt='logo do site'/>
      <img src={p2} alt='logo do site'/>
    </div>
  );
}

export default App;
