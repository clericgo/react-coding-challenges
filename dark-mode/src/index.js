import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './common/containers/App';
import './styles/_main.scss';
import './styles/_dark-mode.scss';
import Routes from './routes';

ReactDOM.render(
  <div>
    <AppContainer>
      <Routes />
    </AppContainer>
  </div>,
  document.getElementById('root')
  
);
