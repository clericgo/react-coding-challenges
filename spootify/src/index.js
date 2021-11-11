import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';
import { SpotifyApiContext } from 'react-spotify-api';

ReactDOM.render(
  <React.StrictMode>
    <CoreLayout>
      <SpotifyApiContext.Provider>
        <Routes />
      </SpotifyApiContext.Provider>
    </CoreLayout>
  </React.StrictMode>,
  document.getElementById('root')
);
