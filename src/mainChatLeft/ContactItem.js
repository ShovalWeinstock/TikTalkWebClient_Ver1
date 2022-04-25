function ContactItem({ picture, nickname, onclick, lastChat }) {


    var message = (lastChat.type == "text"? lastChat.content : lastChat.type);

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
                    <p className="lastMessege">{message}</p>
                </div>

            </div>
        </div>
    )
    debugger
}
export default ContactItem;