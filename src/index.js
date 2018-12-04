import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import gameStore from './store';
import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
  <Provider store={gameStore}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
