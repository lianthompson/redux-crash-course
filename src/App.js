import React from 'react';
import logo from './logo.svg';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';


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
