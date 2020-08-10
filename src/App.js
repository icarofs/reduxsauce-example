import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './services/history';
import './config/ReactotronConfig';
import Routes from './routes';
import store from './store';
import Header from './pages/Header';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
