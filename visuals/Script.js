document.getElementById('vinylInfo');
function retiveInfo(){ 
vinylInfo.textContent= "Heisann dette er en test";

}

function showCollection(){
    vinylInfo.textContent="Your collection: "; 
}

function addRecord(){
    vinylInfo.innerHTML=
        <form>
            <label>Name of record</label>
            <br>
                <input id="Platenavn"></input>
                <br>
                    <label>Artist/group</label>
                    <br>
                        <input id="artist"></input>
                        <br>
                            <label>Release year</label>
                            <br>
                                <input id="year"></input>
                                <br>
                                    <button>submit</button>
        </form>
}