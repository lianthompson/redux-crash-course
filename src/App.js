import React from 'react';
import logo from './logo.svg';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Posts/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <PostForm>
        <hr />
      </PostForm>
    </div>
  );
}

export default App;
