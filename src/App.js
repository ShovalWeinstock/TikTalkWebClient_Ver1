import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Registration />}/>
                <Route path="/chats" element={<MainChat />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
