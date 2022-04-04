import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainChat from './mainChat';
import App from './mainChat';
  // import Login from './Login';
  // import './Registration'
  // import Registration from './Registration';

//find the element "rood", and paint on it ./app on
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <MainChat />
  </React.StrictMode>,
  document.getElementById('root')
);