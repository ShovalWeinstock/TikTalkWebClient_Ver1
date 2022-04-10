function ContactItem({ name, prevText, date }) {
    return (
        <div className="contact">
            <div className='profilePicture'>
                <img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" className="cover"></img>
            </div>
            <div className="contactDetails">
                <h6 className="mb-0">{name}</h6>
                <p className="time">{date}</p>
                <p className="lastMessege">{prevText}</p>
            </div>
        </div>
    )
}
export default ContactItem;