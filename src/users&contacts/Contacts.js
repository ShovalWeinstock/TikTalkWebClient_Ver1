// const contacts = [{name :"Sam", prevText:"hello", date: "24 dec"},
//                     {name:"Guy", prevText:"bbbbb", date: "24 dec"},
//                     {name:"Dan", prevText:"aaaaa", date: "24 dec"},
//                     {name:"Ban", prevText:"aaaaa", date: "24 dec"},
//                     {name:"lan", prevText:"aaaaa", date: "24 dec"},
//                     {name:"Ban", prevText:"aaaaa", date: "24 dec"},
//                     {name:"gan", prevText:"aaaaa", date: "24 dec"},
//                     {name:"tan", prevText:"aaaaa", date: "24 dec"},
//                     {name:"fan", prevText:"aaaaa", date: "24 dec"}]

// const contacts = [{name1:"Sam", prevWin : {name :"Sam", prevText:"hello", date: messages[messages.length -1].currTime}},
import defauldImg from '../defaultImage.jpg';
import avocado from '../avocado.jpg';
import messages from '../messages/Chats';

var lastChat = messages[1].chats[messages[1].chats.length -1];
const contacts = [{picture: avocado, name:"Sam", prevText: lastChat.content, date: lastChat.currTime},
                  {picture: avocado, name:"Dan", prevText: "whats up?", date: "12 dec"},
                  {picture: defauldImg, name:"Gil", prevText:"hello", date: "21 dec"},
                  {picture: defauldImg, name:"Maya", prevText: "whats up?", date: "12 dec"},
                  {picture: defauldImg, name:"Shir", prevText: "whats up?", date: "12 dec"}]

export default contacts;