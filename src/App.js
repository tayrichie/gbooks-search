import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import { Provider } from 'react-redux';
import SearchResults from './components/SearchResults';
import SearchForm from './components/SearchForm';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <main id="main" className="app-wrapper">
          <SearchForm/>
          <SearchResults />
        </main>
      </Provider>
    );
  }
}

export default App;
