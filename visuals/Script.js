document.getElementById('vinylInfo');
function retiveInfo(){ 
vinylInfo.textContent= "Heisann dette er en test";

}

function showCollection(){
    vinylInfo.textContent="Your collection: "; 
}
//if loops in JavaScript
var vis=document.getElementById('nyPlate');
function addRecord(){
  if (vis.style.display==='none'){
      vis.style.display='block';
  }
else{
    vis.style.display='none';
  }
}
function removeRecord(){
    vinylInfo.textContent="What record do you want to remove?";
    if(vinylInfo.style.visibility==="inline"){
        vinylInfo.style.visibility="none";
    }
}
function addedRecord(){
    vinylInfo.textContent="Record Added!";
}
