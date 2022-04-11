import users from "../users/users"

// login:

const isValidLoginInfo = (username, password) => {
    var validInfo = false;
    const usersNum = users.length;
    var i;
    for (i = 0; i < usersNum; i++) {
        if (users[i].username == username && users[i].password == password) {
            validInfo = true;
        }
        break;
    }
    return validInfo;
}

export const login = (username, password) => {
    if (username == '' || password == '' || !isValidLoginInfo(username, password)) {
        document.getElementById("loginError").innerHTML = "Username or Password are invalid";
    }
    else {
        alert("logged in successfully");
        // const navigate = useNavigate();
        // navigate('/mainChat');

        //enter the chats screen (until it will be ready - enters login screen) 
    }
}
