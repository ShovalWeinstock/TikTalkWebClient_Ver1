import './LoginAndRegister.css';

function Registration() {
    const handleClick = () => {
       alert("hi");
    }

    return (
        <div className="main-block">
            <h1>Registration</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Username*</label>
                    <input type="username" className="form-control" id="inputUsername" aria-describedby="usernameHelp" required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputNickname" className="form-label">Nickname</label>
                    <input type="nickname" className="form-control" id="inputNickname" aria-describedby="nicknameHelp"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password*</label>
                    <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock" required></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
                    <input type="password" id="confirmPassword" className="form-control" aria-describedby="passwordHelpBlock" required></input>
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
                <button type="Login" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
}

// <button type="Login" className="btn btn-primary" disabled="disabled" onClick="validateLogin">Submit</button>


export default Registration;
