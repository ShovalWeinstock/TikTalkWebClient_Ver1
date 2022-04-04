import {useRef} from 'react'
function Search({doSearch}) {
    const searchBox = useRef(null);

    const search = function(){
        doSearch(searchBox.current.value);
    }
    return (
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input ref={searchBox} onKeyUp={search} type="text" class="form-control" placeholder="search" aria-label="Username" aria-describedby="basic-addon1" ></input>
        </div>
    )
}
export default Search;



