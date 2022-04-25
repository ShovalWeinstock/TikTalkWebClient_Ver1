import Message from "../messages/Message";
import { useEffect, useRef } from "react";


//create the chat messages
function MsgLoopCreator({ msglis }) {
    const messageList = msglis.map((msg, key) => {
        //check if the message is indeed real and not a placeholder
        if (msg.content) {
            return <Message {...msg} key={key} />
        }
    });

    const dummy = useRef();

    useEffect(() => { dummy.current.scrollIntoView({ behavior: 'smooth' }); });

    return (
        <div className="list-group rounded-0">
            {messageList}
            <div ref={dummy}></div>
        </div>
    )
}
export default MsgLoopCreator;