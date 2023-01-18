import './App.css';
import HomePage from './pages/HomePage';
import NavigationBar from './components/NavigationBar/NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar/>

      <header className="App-header">
        
        <HomePage/>

      </header>
    </div>
  );
}

export default App;
