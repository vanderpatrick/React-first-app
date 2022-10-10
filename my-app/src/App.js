import logo from './logo.svg';
import './App.css';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
// import FunctionalGreeting from './components/FunctionGreeting';
// import FunctionalGreetingWithProps from './components/FunctionGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreeting from './components/StatefulGreetingWithCallBack';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import EventBinding from "./components/EventBinding";
import ConditionalRenderingFunction from './components/ConditionalRenderingFunction';
import ConditionalrenderingClass from './components/ConditionalrenderingClass';
function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike!" age="32 years old;"  /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <EventsClass /> */}
      {/* <EventsFunctional /> */}
      {/* <EventBinding /> */}
      <ConditionalRenderingFunction connected={true} />
      <ConditionalrenderingClass />
    </div>
  );
}

export default App;
