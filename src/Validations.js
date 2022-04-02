const users = [{name: "shoval", nickname: "shov", password: "1235678Aa"}];

const isValidPassword = (password) => {
    if (password.length < 8) {
        return false
    }
    return true
}

const isValidUsername = (username) => {

}

const addUser = (username, nickName, password) => {

}



export const register = (username, nickName, password, confirmation) => {
    if(username == '' || password == '' || confirmation == '') {
        alert("missing info")
    }
    else if(!isValidUsername(username)) {
        alert("username already exists")
    }
    else if (!isValidPassword(password)) {
        alert("invalid password")
    }
    else if (password != confirmation) {
        alert("passwords don't match")
    }
    else {
        alert("registration completed")
        addUser(username, nickName, password);
        //enter the chats screen (until it will be ready - enters login screen) 
    }
}

export const login = (username, password) => {

}

