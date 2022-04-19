import MainChatNew from "../MainChatNew";
import users from "../users&contacts/users"

/*Validate the login input: Check that the username exists, and that the password is correct*/
// const isValidLoginInfo = (username, password) => {
//     var validInfo = false;
//     const usersNum = users.length;
//     var i;
//     for (i = 0; i < usersNum; i++) {
//         if (users[i].username == username && users[i].password == password) {
//             validInfo = true;
//         }
//         break;
//     }
//     return validInfo;
// }

const findUser = (username, password) => {
    var user = null
    const usersNum = users.length;
    var i;
    for (i = 0; i < usersNum; i++) {
        if (users[i].username == username && users[i].password == password) {
            user = users[i];
        }
        break;
    }
    return user;
}

/*Login to the main chat screen*/
export const login = (username, password) => {
    if (username == '' || password == '') {
        document.getElementById("loginError").innerHTML = "Please fill all fileds";
        return null;
    }
    var user = findUser(username, password);
    if (user == null) {
        document.getElementById("loginError").innerHTML = "Username or Password are invalid";
        return null;
    }
    else {
        return user;
    }
}
