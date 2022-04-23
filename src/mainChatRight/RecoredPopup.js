import { useState } from "react";
import "./UploadPopup.css";

function RecordPopup({ trigger, type, setTrigger, addMsg }) {

    // const [attachment, setAttachment] = useState('');

    // const uploadAttachment = (e) => {
    //     setAttachment(URL.createObjectURL(e.target.files[0]));
    // }

    // const sendAttachment = () => {
    //     if (attachment == '') {
    //         document.getElementById("attachmentError").innerHTML = "Please add attachment";
    //     }
    //     else {
    //         addMsg(type, attachment);
    //         setTrigger(false);
    //     }
    // }

    const startRecord = () => {
        var device = navigator.mediaDevices.getUserMedia({ audio: true });
        //container for the data objects
        var items = [];
        //fill the stream with data
        device.then((stream) => {
            var recorder = new MediaRecorder(stream);
            recorder.ondataavailable = e => {
                items.push(e.data);
                //create an audio player feature
                if (recorder.state == 'inactive') {
                    // blob obj holds the audio obj
                    var blob = new Blob(items, { type: 'audio/webm' });
                    var audio = document.getElementById('audio');
                    var mainaudio = document.createElement('audio');
                    mainaudio.setAttribute('controls', 'controls');
                    mainaudio.setAttribute('src', URL.createObjectURL(blob));
                    mainaudio.setAttribute('type', 'video.webm');
                    audio.appendChild(mainaudio);
                }
            }
            recorder.start(100);
            setTimeout(() => {
                recorder.stop();
                //num of microsec the recorder is operating
            }, 5000);
        })
    }

    if (trigger) {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Upload {type}</h5>
                                <button type="button" className="btn-close" onClick={() => { setTrigger(false) }}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <button type="button" className="btn btn-success" onClick={startRecord}>record</button>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { setTrigger(false) }}>Close</button>
                                <button type="button" className="btn btn-success" onClick={sendAttachment}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return ("");
}
export default RecordPopup;
