import { useState } from 'react'


function AudioRecorder() {
    const [recorderState, setRecorderState] = useState(true);
    const changeRecState = () => {
        setRecorderState(false);
    }

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
    return (
        <div className="audio" id="audio">
            <span>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" id="addAudio" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>

                {/* Modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">record audio</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={startRecord}>record</button>
                                <button type="button" className="btn btn-success" onClick={changeRecState}>stop</button>
                            </div>
                        </div>
                    </div>
                </div>
            </span>

        </div>
    )

}
export default AudioRecorder;