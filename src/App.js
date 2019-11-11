import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import './Config/reactotronConfig';

import GlobalStyle from './styles/global';
import Header from './Components/Header';
import Form from './Components/Form'
import Routes from './routes';

import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <Form />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
