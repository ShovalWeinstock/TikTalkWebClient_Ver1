import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import MainChat from './MainChat';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Registration />}/>
                <Route path="/mainChat" element={<MainChat />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;

// <Route path="/chats" element={<MainChat />}/>
