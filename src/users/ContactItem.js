// function ContactItem({ name, prevText, date }) {
function ContactItem({ name1, prevWin }) {
    return (

        <div className="contact">

            <div className='profilePicture'>
                <img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" className="cover"></img>
            </div>

            <div className="contactDetails">

                <div className="contactItemHeader">
                    <h6>{name1}</h6>
                    <p className="time">{prevWin.date}</p>
                </div>

                <div className="lastMessage">
                    <p className="lastMessege">{prevWin.prevText}</p>
                </div>

            </div>
        </div>
    )
}
export default ContactItem;