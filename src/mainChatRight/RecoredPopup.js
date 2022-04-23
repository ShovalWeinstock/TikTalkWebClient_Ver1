import { useState } from "react";
import "./UploadPopup.css";

function RecordPopup({ trigger, type, setTrigger, addMsg }) {

    //const [startOrStop, setStartOrStop] = useState("Record");

    const [attachment, setAttachment] = useState('');

    const sendAttachment = () => {
        addMsg(type, attachment);
        // addMsg("text", "hello");
        // setTrigger(false);
    }

    const startRecord = () => {
        var device = navigator.mediaDevices.getUserMedia({ audio: true });
        //container for the data objects
        var items = [];
        //fill the stream with data
        device.then((stream) => {
            var recorder = new MediaRecorder(stream);

            recorder.ondataavailable = (e) => {
                items.push(e.data);
                //create an audio player feature
                if (recorder.state == 'inactive') {
                    // blob obj holds the audio obj
                    var blob = new Blob(items, { type: 'audio/webm' });
                    // var recording = document.getElementById('recording');
                    // var mainaudio = document.createElement('audio');
                    // mainaudio.setAttribute('controls', 'controls');
                    // mainaudio.setAttribute('src', URL.createObjectURL(blob));
                    // mainaudio.setAttribute('type', 'video.webm');
                    // recording.appendChild(mainaudio);
                    setAttachment(URL.createObjectURL(blob));
                }
            }
            recorder.start(100);
            setTimeout( () => { recorder.stop(); sendAttachment();}, 3000);
        })
    }

    if (trigger) {
        return (
            <div className="popup">
                <div className="popup-inner">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Send Audio</h5>
                                <button type="button" className="btn-close" onClick={() => { setTrigger(false) }}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <div class="center">
                                            <button id="recordBtn" type="button" className="btn btn-success" onClick={startRecord}>Record</button>
                                            <div id="recording" />
                                        </div>
                                    </div>
                                </form>
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
