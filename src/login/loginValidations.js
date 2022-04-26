import users from "../dataBase/users"

const findUser = (username, password) => {
    var user = null
    const usersNum = users.length;
    var i;
    for (i = 0; i < usersNum; i++) {
        if (users[i].username == username && users[i].password == password) {
            user = users[i];
            break;
        }
    }
    return user;
}

// if the user exists - return it. otherwise-return null
export const login = (username, password) => {
    // if the inpuft fields are empty
    if (username == '' || password == '') {
        document.getElementById("loginError").innerHTML = "Please fill all fileds";
        return null;
    }
    // if the user doesn;t exist
    var user = findUser(username, password);
    if (user == null) {
        document.getElementById("loginError").innerHTML = "Username or Password are invalid";
        return null;
    }
    else {
        return user;
    }
}
