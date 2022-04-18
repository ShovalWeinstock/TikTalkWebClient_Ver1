// function ContactItem({ name, prevText, date, onclick }) {
//     return (

//         <div className="contact" onClick={()=>onclick(name)}>

//             <div className='profilePicture'>
//                 <img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" className="cover"></img>
//             </div>

//             <div className="contactDetails">

//                 <div className="contactItemHeader">
//                     <h6>{name}</h6>
//                     <p className="time">{date}</p>
//                 </div>

//                 <div className="lastMessage">
//                     <p className="lastMessege">{prevText}</p>
//                 </div>

//             </div>
//         </div>
//     )
// }
// export default ContactItem;

function ContactItem({ picture, name, date, lastMsg, onclick }) {

    const handleClick = function () {
        onclick(name);
    }

    return (
        <div className="contact" onClick={handleClick}>

            <div className='profilePicture'>
                <img src={picture} className="cover"></img>
            </div>

            <div className="contactDetails">

                <div className="contactItemHeader">
                    <h6>{name}</h6>
                    <p className="time">{date}</p>
                </div>

                <div className="lastMessage">
                    <p className="lastMessege">{lastMsg}</p>
                </div>

            </div>
        </div>
    )
}
export default ContactItem;