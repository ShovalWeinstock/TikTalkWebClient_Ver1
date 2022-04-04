function TypingArea({doSearch}) {

    return (
          <form action="#" class="bg-light">
            <div class="input-group">
              <input type="text" placeholder="Type a message" aria-describedby="button-addon2"
                class="form-control rounded-0 border-0 py-4 bg-light"></input>
              <div class="input-group-append">
                <button id="button-addon2" type="submit" class="btn btn-primary"> send<i
                  class="fa fa-paper-plane"></i></button>
              </div>

                <span id='AddAttach'>
            <select>
            {/* <Link to="/register" className="form-text"> Click here</Link> */}
                <option value="grapefruit"><a href="#" class="link-danger">Danger link</a></option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
                </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
</svg>
            </div>
          </form>
          
    )
}
export default TypingArea;



