import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deploy React App to AWS S3 using GitHub Actions
        </p>
      </header>
    </div>
  );
}

export default App;
