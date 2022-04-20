import Message from "./Message";


//create the chat messages
function MsgLoopCreator({msglis}) {
    const messageList = msglis.map((msg, key) => {
        //check if the message is indeed real and not a placeholder
        if(msg.content){
            return <Message {...msg} key={key} />
        }
    });
    return (
        <div className="list-group rounded-0">
        {messageList}
      </div>
    )
}
export default MsgLoopCreator;