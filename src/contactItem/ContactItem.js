function ContactItem({ name, prevText, date }) {
    return (

        <div className="contact">

            <div className='profilePicture'>
                <img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" className="cover"></img>
            </div>

            <div className="contactDetails">

                <div className="chatHeader">
                    <h6>{name}</h6>
                    <p className="time">{date}</p>
                </div>

                <div className="lastMessage">
                    <p className="lastMessege">{prevText}</p>
                </div>

            </div>
        </div>
    )
}
export default ContactItem;