import './MainChatNew.css';
import defauldImg from './defaultImage.jpg';
import AddContact from './buttons/AddContact';
import { useState } from 'react'
import contacts from './users&contacts/Contacts';
import ContactList from './contactList/ContactList';
import Search from './search/Search';
import TypingArea from './typingArea/TypingArea';
import messages from "./messages/Chats";
import MsgLoopCreator from './messages/MsgLoopCreator';


// class MainChatNew extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { username: props.username, contactList: contacts };
//     }

//     doSearch(q) {
//         console.log(q);
//         this.setState({
//             contactList: contacts.filter((contacts) => contacts.name.includes(q))
//         });
//     }

//     refreshList() {
//         this.setState({
//             contactList: [...contacts]
//         });
//     }

//     render() {
//         return (
//             <div className="container">

//                 <div className="leftSide">
//                     <div className='header'>
//                         <div className='profilePicture'>
//                             <img src={defauldImg} className="cover"></img>
//                         </div>
//                         <h6>Contact name</h6>
//                         <AddContact refreshList={(refreshList)} />
//                     </div>

//                     {/*Search Chat*/}
//                     <Search doSearch={doSearch} />

//                     {/*Chats list*/}
//                     <div className="chatsList">
//                         <ContactList contactlis={this.state.contactList} />
//                     </div>
//                 </div>

//                 {/*Current chat*/}
//                 <div className="rightSide">
//                     <div className='header'>
//                         <div className='profilePicture'>
//                             <img src={defauldImg} className="cover"></img>
//                         </div>
//                         <h6>Contact name</h6>
//                     </div>
//                     {/*Conversation*/}
//                     <div className='chat'>
//                     </div>
//                     {/*Input area*/}
//                     <div className='chatInput'>
//                         <TypingArea />
//                     </div>

//                 </div>
//             </div>
//         );
//     }
// }

function MainChatNew(props) {
    
    const [messageList, setMessageList] = useState(messages);
    const [contactList, setContactList] = useState(contacts);
    const [currentChat, setCurrrentChat] = useState(messageList.find(({ name }) => (name === "Sam")).chats);
    const [currentContact, setCurrrentContact] = useState('');



    //when called, only reload the messages in the chat
    const refreshMsgList = function () {
        setMessageList([...messages]);
    }
    
    const doSearch = function (q) {
        console.log(q);
        setContactList(contacts.filter((contacts) => contacts.name.includes(q)))
    }

    // const doSearch = function (q) {
    //     console.log(q);
    //     setContactList(contacts.filter((contacts) => contacts.name1.includes(q)))
    // }

    const refreshList = function () {
        setContactList([...contacts]);
    }

    const refreshCurrentChat = function (contactName) {
        // setCurrrentChat(messages.find(({ name }) => (name === contactName)).chats);
        setCurrrentChat(messageList.find(({ name }) => (name === contactName)).chats);
        setCurrrentContact(contactName);
    }

    return (
        <div className="container">

            <div className="leftSide">
                <div className='header'>
                    <div className='profilePicture'>
                        <img src={defauldImg} className="cover"></img>
                    </div>
                    <h6>{props.user}</h6>
                    <AddContact refreshList={refreshList} />
                </div>

                {/*Search Chat*/}
                <Search doSearch={doSearch} />

                {/*Chats list*/}
                <div className="chatsList">
                    <ContactList contactlis={contactList} onContactClick={refreshCurrentChat} />
                </div>
            </div>

            {/*Current chat*/}
            <div className="rightSide">
                <div className='header'>
                    <div className='profilePicture'>
                        <img src={defauldImg} className="cover"></img>
                    </div>
                    <h6>{currentContact}</h6>
                </div>
                {/*Conversation*/}
                <div className='chat'>
                    <MsgLoopCreator msglis={currentChat} />
                </div>
                {/*Input area*/}
                <div className='chatInput'>
                    <TypingArea refreshChat={refreshMsgList} currChat={currentChat} />
                </div>

            </div>
        </div>
    );
}

// <MsgLoopCreator msglis={currentChat} />


export default MainChatNew;
