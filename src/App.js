import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Connectapp from './component/Movieapp';
import store from './stores/Store'

function App() {
  return (
      <Provider store={store}>
      <Connectapp />
      </Provider>
  );
}

export default App;
