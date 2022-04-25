import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import MainChat from './MainChat';
import MainChat from './MainChat';
import Login from './login/Login';
import avocado from './avocado.jpg';

//<MainChat user={{ username: "shoval", nickname: "shov", password: "12345678Aa", profilePic: avocado }} />
// { username: "itamar", nickname: "ita", password: "12345678Aa", profilePic: grandma }


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);