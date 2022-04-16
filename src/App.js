import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './register/Registration';
import Login from './login/Login';
import MainChatNew from './MainChatNew';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Registration />}/>
                <Route path="/mainChat" element={<MainChatNew />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;

// <Route path="/chats" element={<MainChat />}/>
