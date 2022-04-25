//represent a contact in the UI contact list
function ContactItem({ picture, nickname, onclick, lastChat }) {

    // return the message type or text
    var message = (lastChat.type == "text"? lastChat.content : lastChat.type);
    //if the msg is too long show a shorten verion in the contact preview
    var msgShortnen = function(msg){
        if (message.length > 20){
            msg = msg.slice(0,19) + " ...";
        }
        return msg;
    }
    //send the parmas to the main chat for updatingthe preview of the contact
    const handleClick = function () {
        onclick({picture: picture, nickname: nickname});
    }

    return (
        <div className="contact" onClick={handleClick}>

            <div className='profilePicture'>
                <img src={picture} className="cover"></img>
            </div>

            <div className="contactDetails">

                <div className="contactItemHeader">
                    <h6>{nickname}</h6>
                    {/* current time of the last chat */}
                    <p className="time">{lastChat.currTime}</p>
                </div>

                <div className="lastMessage">
                    {/* the last msg in the chat */}
                    <p className="lastMessege">{msgShortnen(message)}</p>
                </div>

            </div>
        </div>
    )
}
export default ContactItem;