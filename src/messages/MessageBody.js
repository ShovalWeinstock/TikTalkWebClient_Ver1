function MessageBody({ content, type }) {
    // image message
    if (type == "image") {
        return (<img src={content} className="img"></img>);
    }
    // video message
    else if (type == "video") {

    }
    // text message
    return (<p>{content}</p>);
}
export default MessageBody;