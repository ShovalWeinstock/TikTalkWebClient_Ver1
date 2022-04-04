import './LoginAndRegister.css';
import { useState } from "react";
//import { useState, useEffect } from "react";
import { register } from './Validations.js';
//import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';



// function Registration() {

//     const initialValues = {username: "", nickName: "", password: "", confirmation: ""};
//     const [formValues, setFormValues] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);

//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setFormValues({...formValues, [name]:value});
//         // console.log(formValues);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setFormErrors(validate(formValues));
//         setIsSubmit(true);
//     };

//     useEffect(() => {
//         if(Object.keys(formErrors).length === 0 && isSubmit) {
//             console.log(formValues);
//         }
//     }, [formErrors]);

//     const validate = (values) => {
//         const errors = {};
//         if (!values.username) {
//             errors.username = "Username is requierd"
//         }
//         // else if (username exists) {
//         //     errors.username = "Username already exists"
//         // }

//         if (!values.password) {
//             errors.password = "Password is requierd"
//         }
//         // else if (password is invalid) {
//         //     errors.password = "Invalid password"
//         // }

//         if (!values.confirmation) {
//             errors.confirmation = "Password confirmation is requierd"
//         }
//         // else if(passwords don't match) {
//         //     errors.confirmation = "Passwords don't match"
//         // }
//         return errors;
//     };

//     return (
//         <div className="main-block">
//         <pre>{JSON.stringify(formValues,undefined,2)}</pre>
//             <h1>Registration</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="inputUsername" className="form-label">Username*</label>
//                     <input type="username" className="form-control" id="inputUsername" aria-describedby="usernameHelp" 
//                     required value={formValues.username} onChange={handleChange}></input>
//                 </div>
//                 <p>{formErrors.username}</p>
//                 <div className="mb-3">
//                     <label htmlFor="inputNickname" className="form-label">Nickname</label>
//                     <input type="nickname" className="form-control" id="inputNickname" aria-describedby="nicknameHelp" 
//                     value={formValues.nickName} onChange={handleChange}></input>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="inputPassword" className="form-label">Password*</label>
//                     <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock" 
//                     required value={formValues.password} onChange={handleChange}></input>
//                 </div>
//                 <p>{formErrors.password}</p>
//                 <div className="mb-3">
//                     <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
//                     <input type="password" id="confirmPassword" className="form-control" aria-describedby="passwordHelpBlock" 
//                     required value={formValues.confirmation} onChange={handleChange}></input>
//                     <p>{formErrors.confirmation}</p>
//                     <div id="passwordHelpBlock" className="form-text">
//                         Your password must contain:<br></br>
//                         - At least 8 characters<br></br>
//                         - At least one lowercase<br></br>
//                         - At least one uppercase<br></br>
//                         - At least one number<br></br>
//                     </div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="formFile" className="form-label">Image</label>
//                     <input className="form-control" type="file" id="formFile"></input>
//                 </div>
//                 <button type="Login" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Registration;

// class Registration extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { username: "", nickname: "", password: "", confirmation: ""};
//     }

//     render() {

//         // const [username, setUsername] = useState('');
//         // const [nickname, setNickname] = useState('');
//         // const [password, setPassword] = useState('');
//         // const [confirmation, setConfirmation] = useState('');

//         const clearErrors = () => {
//             document.getElementById("usernameErrors").innerHTML = "";
//             document.getElementById("passwordErrors").innerHTML = "";
//             document.getElementById("confirmationErrors").innerHTML = "";
//         }

//         const handleSubmit = (e) => {
//             clearErrors();
//             e.preventDefault();
//             register(this.state.username, this.state.nickname, this.state.password, this.state.confirmation);
//         }

//         // add reguired to all input tags (except nickname) ? then the errors don't appear on the screen..
//         return (
//             <div className="main-block">
//                 <h1>Registration</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="inputUsername" className="form-label">Username*</label>
//                         <input type="username" className="form-control" id="inputUsername" aria-describedby="usernameHelp"
//                             value={this.state.username} onChange={(e) => setUsername(e.target.value)}></input>
//                         <p id="usernameErrors" className="errorMessege"></p>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="inputNickname" className="form-label">Nickname</label>
//                         <input type="nickname" className="form-control" id="inputNickname" aria-describedby="nicknameHelp"
//                             value={this.state.nickname} onChange={(e) => setNickname(e.target.value)}></input>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="inputPassword" className="form-label">Password*</label>
//                         <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock"
//                             value={this.state.password} onChange={(e) => setPassword(e.target.value)}></input>
//                         <p id="passwordErrors" className="errorMessege"></p>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
//                         <input type="password" id="confirmPassword" className="form-control" aria-describedby="passwordHelpBlock"
//                             value={this.state.confirmation} onChange={(e) => setConfirmation(e.target.value)}></input>
//                         <p id="confirmationErrors" className="errorMessege"></p>
//                         <div id="passwordHelpBlock" className="form-text">
//                             Your password must contain:<br></br>
//                             - At least 8 characters<br></br>
//                             - At least one lowercase<br></br>
//                             - At least one uppercase<br></br>
//                             - At least one number<br></br>
//                         </div>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="formFile" className="form-label">Image</label>
//                         <input className="form-control" type="file" id="formFile"></input>
//                     </div>
//                     <button type="Submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }




// good, not a class:

function Registration() {

    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const clearErrors = () => {
        document.getElementById("usernameErrors").innerHTML = "";
        document.getElementById("passwordErrors").innerHTML = "";
        document.getElementById("confirmationErrors").innerHTML = "";
    }

    const handleSubmit = (e) => {
        clearErrors();
        e.preventDefault();
        console.log(username);
        register(username, nickname, password, confirmation);
    }

    // add reguired to all input tags (except nickname) ? then the errors don't appear on the screen..
    return (
        <div className="main-block">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Username*</label>
                    <input type="username" className="form-control" id="inputUsername" aria-describedby="usernameHelp"
                        value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <p id="usernameErrors" className="errorMessege"></p>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputNickname" className="form-label">Nickname</label>
                    <input type="nickname" className="form-control" id="inputNickname" aria-describedby="nicknameHelp"
                        value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password*</label>
                    <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock"
                        value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <p id="passwordErrors" className="errorMessege"></p>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
                    <input type="password" id="confirmPassword" className="form-control" aria-describedby="passwordHelpBlock"
                        value={confirmation} onChange={(e) => setConfirmation(e.target.value)}></input>
                    <p id="confirmationErrors" className="errorMessege"></p>
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must contain:<br></br>
                        - At least 8 characters<br></br>
                        - At least one lowercase<br></br>
                        - At least one uppercase<br></br>
                        - At least one number<br></br>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Image</label>
                    <input className="form-control" type="file" id="formFile"></input>
                </div>
                <button type="Submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Registration;
