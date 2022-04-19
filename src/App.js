import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './register/Registration';
import Login from './login/Login';
import MainChatNew from './MainChatNew';
import { useState } from 'react';


function App() {
    
    const [isRegistered, setIsRegistered] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState(null);

    const changeRegState = () => {
        setIsRegistered(!isRegistered)
    }

    const changeLoggedInUser = (u) => {
        setLoggedInUser(u);
    }
    
    const Screen = () => {
        if(!isRegistered) {
            return <Registration changeRegState={changeRegState} changeLoggedInUser={changeLoggedInUser} />
        }
        else if(loggedInUser == null) {
            return <Login changeRegState={changeRegState} changeLoggedInUser={changeLoggedInUser} />
        }
        else {
            return <MainChatNew user={loggedInUser}/>
        }
    }

    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Login />}/>
        //         <Route path="/register" element={<Registration />}/>
        //         <Route path="/mainChat" element={<MainChatNew />}/>
        //     </Routes>
        // </BrowserRouter>
        
        <Screen></Screen>
    );
}
export default App;
