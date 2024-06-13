import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/message';
import Counter from './components/Counter';
import Login from './components/Login';
import Login1 from './components/Login1';
import Login2 from './components/Login2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
          {/* <Message/> */}
          {/* <Message text = "hello" color = "blue"></Message>
          <Message text = "welcome"></Message>
          <Counter initialValue={5}/>
          <Counter initialValue={15}/> */}
          {/* <Login/> */}
          {/* <Counter initialValue={5}/> */}
          {/* <Login1/> */}
          <Login2/>
      </main>
    </div>
  );
}

export default App;
