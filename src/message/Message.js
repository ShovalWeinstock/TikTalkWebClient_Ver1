function Message({msgStyle1, msgStyle2, msgStyle3, content, currTime}) {

    return (
            <div className={msgStyle1}><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg"
              alt="user" width="50" className="rounded-circle"></img>
              <div className="media-body ml-3">
                <div className={msgStyle2}>
                  <p className={msgStyle3}>{content}</p>
                </div>
                <p className="small text-muted">{currTime}</p>
              </div>
            </div>
    )
}
export default Message;

