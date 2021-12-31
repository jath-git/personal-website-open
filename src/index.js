import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Redirect from './Redirect';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

ReactDOM.render(
  <React.StrictMode>
    {
      window.screen.width >= window.screen.height ? <App /> :
        <DeviceOrientation lockOrientation={'landscape'}>
          <Orientation orientation='landscape' alwaysRender={false}>
            <App />
          </Orientation>
          <Orientation orientation='portrait' alwaysRender={false}>
            <Redirect />
          </Orientation>
        </DeviceOrientation>
    }
  </React.StrictMode>,
  document.getElementById('root')
);