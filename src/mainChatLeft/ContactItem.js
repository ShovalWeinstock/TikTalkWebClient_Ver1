function ContactItem({ picture, nickname, onclick, lastChat }) {

    // The last message of the chat with the user. If it contains an attachement, show the type of the attachement (image/video/audio).
    var message = (lastChat.type == "text"? lastChat.content : lastChat.type);

    const handleClick = function () {
        onclick({picture: picture, nickname: nickname});
    }

    return (
        <div className="contact" onClick={handleClick}>

            {/* profile picture */}
            <div className='profilePicture'>
                <img src={picture} className="cover"></img>
            </div>

            <div className="contactDetails">
                <div className="contactItemHeader">
                    {/* nickname */}
                    <h6>{nickname}</h6>
                    {/* Time of the last message */}
                    <p className="time">{lastChat.currTime}</p>
                </div>

                <div className="lastMessage">
                    {/* The last msg in the chat */}
                    <p className="lastMessege">{message}</p>
                </div>

            </div>
        </div>
    )
    debugger
}
export default ContactItem;