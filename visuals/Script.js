document.getElementById('vinylInfo');
function retiveInfo(){ 
vinylInfo.textContent= "Heisann dette er en test";

}

function showCollection(){
    vinylInfo.textContent="Your collection: "; 
}

function addRecord(){
    vinylInfo.innerHTML=<form>
        <label>Name of record</label>
        <input>record</input>
        <label>Artist/group</label>
        <input>Artist name</input>
    </form>
}