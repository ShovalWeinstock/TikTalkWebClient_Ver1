import './MainChatNew.css';
import defauldImg from './defaultImage.jpg';
import AddContact from './buttons/AddContact';
import { useState } from 'react'
import contacts from './users/Contacts';
import ContactList from './contactList/ContactList';
import Search from './search/Search';
import TypingArea from './typingArea/TypingArea';
import messages from './message/Messages';
import MsgLoopCreator from './message/MsgLoopCreator';


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

    
    const doSearch = function (q) {
        console.log(q);
        setContactList(contacts.filter((contacts) => contacts.name.includes(q)))
    }
    
    const [contactList, setContactList] = useState(contacts);
    const refreshList = function () {
        setContactList([...contacts]);
    }
    const [messageList, setMessageList] = useState(messages);
    const refreshMsgList = function () {
        setMessageList([...messages]);
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
                    <ContactList contactlis={contactList} />
                </div>
            </div>

            {/*Current chat*/}
            <div className="rightSide">
                <div className='header'>
                    <div className='profilePicture'>
                        <img src={defauldImg} className="cover"></img>
                    </div>
                    <h6>Contact name</h6>
                </div>
                {/*Conversation*/}
                <div className='chat'>
                    <MsgLoopCreator msglis={messageList} />
                </div>
                {/*Input area*/}
                <div className='chatInput'>
                    <TypingArea refreshChat={refreshMsgList}/>
                    {/* <button type="button" class="btn btn-outline-secondary" id="sendMsgBtn">Send</button> */}

                </div>

            </div>
        </div>
    );
}

export default MainChatNew;
