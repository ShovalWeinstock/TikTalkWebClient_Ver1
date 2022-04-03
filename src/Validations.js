const users = {shoval : { name: "shoval", nickname: "shov", password: "1235678Aa" }};

const isValidPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (regex.test(password)) {
        return true;
    }
    return false;
}

const isValidUsername = (username) => {
    if (username == "shoval") {
        return false;

    }
    return true;
}

const addUser = (username, nickName, password) => {

}

export const register = (username, nickName, password, confirmation) => {

    var validInfo = true;
    // username validation:
    if (username == '') {
        document.getElementById("usernameErrors").innerHTML = "Username required";
        validInfo = false;
    }
    else if (!isValidUsername(username)) {
        document.getElementById("usernameErrors").innerHTML = "Username already exists";
        validInfo = false;
    }
    // password validation:
    if (password == '') {
        document.getElementById("passwordErrors").innerHTML = "Password required";
        validInfo = false;
    }
    else if (!isValidPassword(password)) {
        document.getElementById("passwordErrors").innerHTML = "Invalid password";
        validInfo = false;
    }
    // password confirmation validation:
    if (confirmation == '') {
        document.getElementById("confirmationErrors").innerHTML = "Password confirmation required";
        validInfo = false;
    }
    else if (password != confirmation) {
        document.getElementById("confirmationErrors").innerHTML = "Passwords don't match";
        validInfo = false;
    }
    // the info is valid. create the user:
    if (validInfo) {
        alert("registration completed");
        if (nickName == "") {
            nickName = username;
        }
        addUser(username, nickName, password);
        //enter the chats screen (until it will be ready - enters login screen) 
    }
}



export const login = (username, password) => {

}

