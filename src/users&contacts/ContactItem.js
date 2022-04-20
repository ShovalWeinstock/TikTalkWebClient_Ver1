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

import { useState } from 'react'


function ContactItem({ picture, name, date, prevText, onclick, lastChat }) {


    var message = (lastChat.type == "text"? lastChat.content : lastChat.type);

    const handleClick = function () {
        onclick({picture: picture, name: name, prevText: prevText, date: date});
    }

    // const viewLastMsg = function () {
    //     if(lastChat.type == "image" || lastChat.type == "video") {
    //         return (lastChat.type);
    //     }
    //     else {
    //         return (lastChat.content);
    //     }
    // }


    return (
        <div className="contact" onClick={handleClick}>

            <div className='profilePicture'>
                <img src={picture} className="cover"></img>
            </div>

            <div className="contactDetails">

                <div className="contactItemHeader">
                    <h6>{name}</h6>
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
}
export default ContactItem;