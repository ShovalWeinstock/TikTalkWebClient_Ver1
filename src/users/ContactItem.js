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





function ContactItem({ name1, prevWin, onclick }) {

    const handleClick = function () {
        onclick(name1);
    }

    return (
        <div className="contact" onClick={handleClick}>

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