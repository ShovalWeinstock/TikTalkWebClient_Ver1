import './LoginAndRegister.css';
import { useState , useEffect } from 'react';
import { register } from './Validations.js';





function Registration() {

    const initialValues = {username: "", nickName: "", password: "", confirmation: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log("hi");
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Username is requierd"
        }
        if (!values.password) {
            errors.username = "Password is requierd"
        }
        if (!values.confirmation) {
            errors.username = "Password confirmation is requierd"
        }
        return errors;
    };

    return (
        <div className="main-block">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Username*</label>
                    <input type="username" className="form-control" id="inputUsername" aria-describedby="usernameHelp" 
                    required value={formValues.username} onChange={handleChange}></input>
                </div>
                <p>{formErrors.username}</p>
                <div className="mb-3">
                    <label htmlFor="inputNickname" className="form-label">Nickname</label>
                    <input type="nickname" className="form-control" id="inputNickname" aria-describedby="nicknameHelp" 
                    value={formValues.nickName} onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password*</label>
                    <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock" 
                    required value={formValues.password} onChange={handleChange}></input>
                </div>
                <p>{formErrors.password}</p>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
                    <input type="password" id="confirmPassword" className="form-control" aria-describedby="passwordHelpBlock" 
                    required value={formValues.confirmation} onChange={handleChange}></input>
                    <p>{formErrors.confirmation}</p>
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
                <button type="Login" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Registration;


// function Registration() {

//     const [username, setUsername] = useState('');
//     const [nickname, setNickname] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmation, setConfirmation] = useState('');

//     return (
//         <div className="main-block">
//             <h1>Registration</h1>
//             <form>
//                 <div className="mb-3">
//                     <label htmlFor="inputUsername" className="form-label">Username*</label>
//                     <input type="username" className="form-control" id="inputUsername" aria-describedby="usernameHelp" 
//                     required value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="inputNickname" className="form-label">Nickname</label>
//                     <input type="nickname" className="form-control" id="inputNickname" aria-describedby="nicknameHelp" 
//                     value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="inputPassword" className="form-label">Password*</label>
//                     <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock" 
//                     required value={password} onChange={(e) => setPassword(e.target.value)}></input>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
//                     <input type="password" id="confirmPassword" className="form-control" aria-describedby="passwordHelpBlock" 
//                     required value={confirmation} onChange={(e) => setConfirmation(e.target.value)}></input>
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
//                 <button type="Login" className="btn btn-primary" onClick={() => register(username, nickname, password, confirmation)}>Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Registration;
