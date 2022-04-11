import './TypingArea.css';
import addMsg from '../MainChat'
function TypingArea({ doSearch }) {

    return (

        // <input type="text" placeholder="Type a message" aria-describedby="button-addon2"
        //             className="form-control rounded-0 border-0 py-4 bg-light"></input>

        // <div className="input-group">
        //     <div className='chatInput'>
        //         <input type="text" placeholder="Type A Message"></input>
        //     </div>
        // </div>





        <div class="input-group">

            {/*Message typing area*/}
            <input id="chatTypingArea" type="text" class="form-control" aria-label="Text input with segmented dropdown button"></input>

            {/*"Send" button*/}
            <button type="button" class="btn btn-outline-secondary"  id="sendMsgBtn">Send</button>
            
            {/*dropup*/}
            <div class="btn-group dropup">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="chatDropup">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>

        </div>

    )
}
export default TypingArea;

// <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
// <span class="visually-hidden">Toggle Dropdown</span>
// </button>
// <ul class="dropdown-menu dropdown-menu-end">
// <li><a class="dropdown-item" href="#">Action</a></li>
// <li><a class="dropdown-item" href="#">Another action</a></li>
// <li><a class="dropdown-item" href="#">Something else here</a></li>
// </ul>

