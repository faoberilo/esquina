import './App.css';
import Header from '../src/img/header.jpg'
import p1 from '../src/img/01.jpg'
import p2 from '../src/img/02.jpg'
import p3 from '../src/img/03.jpg'
import p4 from '../src/img/04.jpg'
import p5 from '../src/img/05.jpg'





function App() {
  return (
    <div className="app">
      <header><img src={Header} alt='logo do site'/></header>
      <img src={p1} alt='logo do site'/>
      <img src={p2} alt='logo do site'/>
      <img src={p3} alt='logo do site'/>
      <img src={p4} alt='logo do site'/>
      <img src={p5} alt='logo do site'/>
    </div>
  );
}

export default App;
