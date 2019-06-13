import React from 'react';
import logo from './logo.svg';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './App.css';

const store = createStore(() => [], {}, applyMiddleware());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <PostForm>
            <hr />
          </PostForm>
          <Posts />
        </div>
      </Provider>
    );
  }
}
