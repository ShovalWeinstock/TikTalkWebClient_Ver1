import Registration from './register/Registration';
import Login from './login/Login';
import MainChat from './MainChat';
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
            return <MainChat user={loggedInUser}/>
        }
    }

    return (
        <Screen></Screen>
    );
}
export default App;
