import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
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
