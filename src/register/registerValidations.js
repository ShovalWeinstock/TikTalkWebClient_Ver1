import users from "../dataBase/users"

const isValidPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (regex.test(password)) {
        return true;
    }
    return false;
}

export const usernameExists = (username) => {
    var usernameExists = false;
    const usersNum = users.length;
    var i;
    for (i = 0; i < usersNum; i++) {
        if (users[i].username == username) {
            usernameExists = true;
            break;
        }
    }
    return usernameExists;
}


export const register = (username, nickName, password, confirmation, profilePic) => {
    var validInfo = true;
    // username validation:
    if (username == '') {
        document.getElementById("usernameErrors").innerHTML = "Username required";
        validInfo = false;
    }
    else if (usernameExists(username)) {
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
        if (nickName == "") {
            nickName = username;
        }
        // addUser(username, nickName, password, profilePic);
        const newUser = { username: username, nickName: nickName, password: password, profilePic: profilePic };
        users.push(newUser);
        //enter the chats screen (until it will be ready - enters login screen)
        return newUser
    }
    return null
}
