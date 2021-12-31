document.getElementById('vinylInfo');
function retiveInfo(){ 
vinylInfo.textContent= "Heisann dette er en test";
setTimeout(retiveInfo, 500); 

}

function showCollection(){
    vinylInfo.textContent="Your collection: "; 
}