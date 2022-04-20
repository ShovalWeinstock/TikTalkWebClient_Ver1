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

function MainChatNew(props) {

    const [messageList, setMessageList] = useState(messages);
    const [contactList, setContactList] = useState(contacts);
    const [currentContact, setCurrrentContact] = useState({picture: defauldImg, name:"", prevText:"", date: ""});
    const [currentChat, setCurrrentChat] = useState(messageList.find(({ name }) => (name === currentContact.name)).chats);

    //when called, only reload the messages in the chat
    const refreshMsgList = function () {
        setMessageList([...messages]);
    }

    const doSearch = function (q) {
        setContactList(contacts.filter((contacts) => contacts.name.includes(q)))
    }

    const refreshContactList = function () {
        setContactList([...contacts]);
    }
    
    const refreshCurrentChat = function (contact) {
        // setCurrrentChat(messages.find(({ name }) => (name === contactName)).chats);
        setCurrrentContact(contact);
        setCurrrentChat(messageList.find(({ name }) => (name === contact.name)).chats);
    }
    
    return (
        <div className="container">

            <div className="leftSide">
                <div className='header'>
                    <div className='profilePicture'>
                        <img src={props.user.profilePic} className="cover"></img>
                    </div>
                    <h6>{props.user.username}</h6>
                    <AddContact refreshList={refreshContactList} refreshChatList={refreshMsgList}/>
                </div>

                {/*Search Chat*/}
                <Search doSearch={doSearch} />

                {/*Chats list*/}
                <div className="chatsList">
                    {/* the list of contacts gets the current state of contacts and messages */}
                    <ContactList contactlis={contactList} onContactClick={refreshCurrentChat} updatedMsg={messageList} />
                </div>
            </div>

            {/*Current chat*/}
            <div className="rightSide">
                <div className='header'>
                    <div className='profilePicture'>
                        <img src={currentContact.picture} className="cover"></img>
                    </div>
                    <h6>{currentContact.name}</h6>
                </div>
                {/*Conversation*/}
                <div className='chat'>
                    <MsgLoopCreator msglis={currentChat} />
                </div>
                {/*Input area*/}
                <div className='chatInput'>
                    {/* to activate the refreshing functions when sending a message */}
                    <TypingArea refreshChat={refreshMsgList} currChat={currentChat} refreshContactList={refreshContactList}/>
                </div>

            </div>
        </div>
    );
}

// <MsgLoopCreator msglis={currentChat} />


export default MainChatNew;
