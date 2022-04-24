import './MainChatNew.css';
import AddContact from './mainChatLeft/AddContact';
import { useState } from 'react'
import contacts from './dataBase/Contacts';
import ContactList from './mainChatLeft/ContactList';
import Search from './mainChatLeft/Search';
import TypingArea from './mainChatRight/TypingArea';
import messages from "./dataBase/Chats";
import MsgLoopCreator from './mainChatRight/MsgLoopCreator';
import AudioRecorder from './audioRecorder/AudioRecorder';

function MainChatNew(props) {

    const [messageList, setMessageList] = useState(messages.find(({ user }) => (props.user.username === user)).usersChats);
    const [contactList, setContactList] = useState(contacts.find(({ name }) => (props.user.username === name)).cont);
    const [currentContact, setCurrrentContact] = useState(contactList[0]);
    const [currentChat, setCurrrentChat] = useState(messageList.find(({ nickname }) => (currentContact.nickname === nickname)).chats);

    //when called, only reload the messages in the chat
    const refreshMsgList = function () {
        setMessageList([...messages.find(({ user }) => (props.user.username === user)).usersChats]);
    }

    const doSearch = function (q) {
        setContactList(contacts.filter((contacts) => contacts.nickname.includes(q)))
    }

    const refreshContactList = function () {
        setContactList(contacts.find(({ name }) => (props.user.username === name)).cont);
    }

    const refreshCurrentChat = function (contact) {
        setCurrrentContact(contact);
        setCurrrentChat(messageList.find(({ nickname }) => (contact.nickname === nickname)).chats);
    }


    var rightSide = (currentContact == contacts[0].cont[0]) ?
        <div className="rightSide" />
        :
        (
            <div className="rightSide">
                <div className='header'>
                    <div className='profilePicture'>
                        <img src={currentContact.picture} className="cover"></img>
                    </div>
                    <h6>{currentContact.nickname}</h6>
                </div>
                {/*Conversation*/}
                <div className='chat'>
                    <MsgLoopCreator msglis={currentChat} />
                </div>
                {/*Input area*/}
                <div className='chatInput'>
                    {/* to activate the refreshing functions when sending a message */}
                    <TypingArea refreshChat={refreshMsgList} currChat={currentChat} refreshContactList={refreshContactList} />
                </div>
            </div>
        );

    return (
        <div className="container">

            <div className="leftSide">
                <div className='header'>
                    <div className='profilePicture'>
                        <img src={props.user.profilePic} className="cover"></img>
                    </div>
                    <h6>{props.user.username}</h6>
                    <AddContact refreshList={refreshContactList} refreshChatList={refreshMsgList}
                     usersContactList={contactList} usersMessageList={messageList} />
                </div>

                {/*Search Chat*/}
                <Search doSearch={doSearch} />

                {/*Chats list*/}
                <div className="chatsList">
                    {/* the list of contacts gets the current state of contacts and messages */}
                    <ContactList contactlis={contactList} onContactClick={refreshCurrentChat} updatedMsg={messageList} />
                </div>
            </div>

            {rightSide}

        </div>
    );
}

export default MainChatNew;
