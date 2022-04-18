// function Message({msgStyle1, msgStyle2, msgStyle3, content}) {

//     return (
//             <div className={msgStyle1}><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg"
//               alt="user" width="50" className="rounded-circle"></img>
//               <div className="media-body ml-3">
//                 <div className={msgStyle2}>
//                   <p className={msgStyle3}>{content}</p>
//                 </div>
//                 <p className="small text-muted">12:00 PM | Aug 13</p>
//               </div>
//             </div>
//     )
// }
// export default Message;


// function Message({msgStyle1, msgStyle2, msgStyle3, content, currTime}) {

//   return (
//           <div className={msgStyle1}>
//             <div className="media-body ml-3">
//               <div className={msgStyle2}>
//                 <p className={msgStyle3}>{content}</p>
//               </div>
//               <p className="small text-muted">{currTime}</p>
//             </div>
//           </div>
//   )
// }
// export default Message;


function Message({ content, currTime, sentBy }) {

  return (
    <div className={(sentBy)+" "+"msg"}>
      <div className="msgBody">
        <p>{content}</p>
      </div>
      <p className="small text-muted" >{currTime}</p>
    </div>
  )
}
export default Message;

// {msgStyle1, msgStyle2, msgStyle3, content, currTime}
