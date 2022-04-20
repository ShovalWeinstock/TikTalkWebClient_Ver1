function MessageBody({ content, type }) {
    // image message
    if (type == "image") {
        return (
            <img id="imgMsg" src={content} className="img"></img>);
    }
    // video message
    else if (type == "video") {
        return (
            <video width="320" height="240" controls>
                <source src={content} />
            </video>
        )

    }
    // text message
    return (<p>{content}</p>);
}
export default MessageBody;