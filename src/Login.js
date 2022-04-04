import './LoginAndRegister.css';
import { Link } from 'react-router-dom';
//import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
//import Registration from './Registration';
import { useState } from 'react';
import { login } from './Validations.js';



// class Login extends React.Component {

//     render() {
//         const [username, setUsername] = useState('');
//         const [password, setPassword] = useState('');
//         // goal: submit button should be enabled until all fildes are filled. and then clicking on it should validate the data.
//         const isEmpty = false; // should be true while the fildes are empty. i set is to false for now, so the button will be abled 
//         if (username == '' || password == '') {
//             isEmpty = true;
//         }
//         else {
//             isEmpty = false;
//         }

//         return (
//             <div className="main-block" id="login">
//                 <h1>Login</h1>
//                 <form>
//                     <div className="mb-3">
//                         <label htmlFor="inputUsername2" className="form-label">Username</label>
//                         <input type="username" className="form-control" id="inputUsername2" aria-describedby="usernameHelp"
//                             required value={username} onChange={(e) => setUsername(e.target.value)}></input>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="inputPassword2" className="form-label">Password</label>
//                         <input type="password" id="inputPassword2" className="form-control" aria-describedby="passwordHelpBlock"
//                             required value={password} onChange={(e) => setPassword(e.target.value)}></input>
//                     </div>
//                     <button type="Login" className="btn btn-primary" disabled={isEmpty} onClick={handleClick}>Submit</button>
//                     <span id="notRegistered" className="form-text"> Not registered?</span>
//                     <span>
//                         <BrowserRouter>
//                             <Routes> <Route path="/register" element={<Registration />}></Route> </Routes>
//                             <Link to="/register" className="form-text"> Click here</Link>
//                         </BrowserRouter>
//                     </span>
//                     <span className="form-text"> to regiser</span>
//                 </form>
//             </div>
//         );
//     }
// };


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const clearErrors = () => {
        document.getElementById("loginError").innerHTML = "";
    }

    const handleSubmit = (e) => {
        clearErrors();
        e.preventDefault();
        login(username, password);
    }

    return (
        <div className="main-block" id="login">
            <pre>{JSON.stringify(username, undefined, 2)}</pre>
            <pre>{JSON.stringify(password, undefined, 2)}</pre>

            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputUsername2" className="form-label">Username</label>
                    <input type="username" className="form-control" id="inputUsername2" aria-describedby="usernameHelp"
                        value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword2" className="form-label">Password</label>
                    <input type="password" id="inputPassword2" className="form-control" aria-describedby="passwordHelpBlock"
                        value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="Login" className="btn btn-primary">Submit</button>
                <span id="notRegistered" className="form-text"> Not registered?</span>
                <span>
                    <Link to="/register" className="form-text"> Click here</Link>
                </span>
                <span className="form-text"> to regiser</span>
                <p id="loginError" className="errorMessege"></p>
            </form>
        </div>
    );
}

// <Routes> 
// <Route path="/register" element={<Registration />}></Route> 
// </Routes>

export default Login;
