import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Components/Pages/AllRoutes';
import bootstrap from 'bootstrap'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
