import messages from "../message/Messages";
export let CURRENT_CONTACT="Sam"; 
export function setcontact(n){
    CURRENT_CONTACT = n;
}
const contacts = [{name1:"Sam", prevWin : {name :"Sam", prevText: messages[0].chats[messages[0].chats.length -1].content, date: messages[0].chats[messages[0].chats.length -1].currTime}},
// const contacts = [{name1:"Sam", prevWin : {name :"Sam", prevText:"hello", date: "21 dec"}},
{name1:"Guy", prevWin :{name:"Guy", prevText:"bbbbb", date: "24 dec"}},
{name1:"Dan", prevWin : {name:"Dan", prevText:"aaaaa", date: "12 dec"}},
{name1:"Ban", prevWin :{name:"Ban", prevText:"aaaaa", date: "33 dec"}},
{name1:"lan", prevWin :{name:"lan", prevText:"aaaaa", date: "24 dec"}}]
// {name1:"Sam", prevWin :{name:"Ban", prevText:"aaaaa", date: "24 dec"}},
// {name1:"Sam", prevWin :{name:"gan", prevText:"aaaaa", date: "24 dec"}},
// {name1:"Sam", prevWin :{name:"tan", prevText:"aaaaa", date: "24 dec"}},
// {name1:"Sam", prevWin :{name:"fan", prevText:"aaaaa", date: "24 dec"}}]
export default contacts;