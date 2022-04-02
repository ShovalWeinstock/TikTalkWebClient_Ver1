import './LoginAndRegister.css';
import { BrowserRouter, Routes, Route, Link ,Navigate} from 'react-router-dom';
import Registration from './Registration';
import { useState } from 'react';


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // goal: submit button should be enabled until all fildes are filled. and then clicking on it should validate the data.
    const isEmpty = false; // should be true while the fildes are empty. i set is to false for now, so the button will be abled 
    const handleClick = () => {
        // if username != '' and password != '' (goal - the button is abled..), it should validate the info
        alert(username);
    }  

    return (
        <div className="main-block" id = "login">
            <h1>Login</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="inputUsername2" className="form-label">Username</label>
                    <input type="username" className="form-control" id="inputUsername2" aria-describedby="usernameHelp"
                     required value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword2" className="form-label">Password</label>
                    <input type="password" id="inputPassword2" className="form-control" aria-describedby="passwordHelpBlock"
                     required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="Login" className="btn btn-primary" disabled = {isEmpty} onClick={handleClick}>Submit</button>
                <span id="notRegistered" className="form-text"> Not registered?</span>
                <span>
                    <BrowserRouter>
                        <Routes> <Route path="/register" element={<Registration />}></Route> </Routes>
                        <Link to="/register" className="form-text"> Click here</Link>
                    </BrowserRouter>
                </span>
                <span className="form-text"> to regiser</span>
            </form>
        </div>
    );
}

export default Login;
