import './App.css';
import './Navbar'
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="component">
    <Home />
      </div>
    </div>
  );
}

export default App;
