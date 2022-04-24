import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import MainChat from './MainChat';
import MainChatNew from './MainChatNew';
import Login from './login/Login';
import avocado from './avocado.jpg';

//<MainChatNew user={{ username: "shoval", nickname: "shov", password: "12345678Aa", profilePic: avocado }} />
// { username: "itamar", nickname: "ita", password: "12345678Aa", profilePic: grandma }


ReactDOM.render(
  <React.StrictMode>
  {/* <MainChatNew user={{ username: "itamar", nickname: "ita", password: "12345678Aa", profilePic: avocado }} /> */}
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);