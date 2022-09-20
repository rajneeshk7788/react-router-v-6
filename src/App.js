import './App.css';
import AllRoutes from './components/layout/AllRoutes';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>React Router - 6</h1>
      <AllRoutes/>
    </div>
  );
}

export default App;
