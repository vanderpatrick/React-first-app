import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionGreeting';
import FunctionalGreetingWithProps from './components/FunctionGreetingWithProps';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      <FunctionalGreetingWithProps />
    </div>
  );
}

export default App;
