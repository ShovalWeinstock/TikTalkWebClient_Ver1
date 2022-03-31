import './LoginAndRegister.css';

function Registration() {
  return (
    <div class="main-block">
      <h1>Registration</h1>
      <form>
        <div class="mb-3">
            <label for="InputUsername" class="form-label">Username*</label>
            <input type="username" class="form-control" id="InputUsername" aria-describedby="usernameHelp"></input>
        </div>
        <div class="mb-3">
          <label for="InputNickname" class="form-label">Nickname</label>
          <input type="nickname" class="form-control" id="Nickname" aria-describedby="nicknameHelp"></input>
      </div>
        <div class="mb-3">
            <label for="inputPassword" class="form-label">Password*</label>
            <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock"></input>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirm Password*</label>
          <input type="password" id="confirmPassword" class="form-control" aria-describedby="passwordHelpBlock"></input>
          <div id="passwordHelpBlock" class="form-text"> 
             Your password must contain:<br></br>
            - At least 8 characters<br></br>
            - At least one lowercase<br></br>
            - At least one uppercase<br></br>
            - At least one number<br></br>
           </div>
        </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Image</label>
        <input class="form-control" type="file" id="formFile"></input>
      </div>
      <button type="Login" class="btn btn-primary" onclick="validateLogin()">Submit</button>
    </form>
  </div>
  );
}

export default Registration;
