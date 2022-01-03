document.getElementById('vinylInfo');
function retiveInfo(){ 
vinylInfo.textContent= "Heisann dette er en test";

}

function showCollection(){
    vinylInfo.textContent="Your collection: "; 
}
//if loops in JavaScript
 document.getElementById("nyPlate");
function addRecord(){
    //hentet fra: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
  if (nyPlate.style.display==="none"){
      nyPlate.style.display="block";
  }
else{
    nyPlate.style.display="none";
  }

}
function removeRecord(){
    vinylInfo.textContent="What record do you want to remove?";
}
function addedRecord(){
    const RecodName=document.getElementById("Recordname");
    const Artist=document.getElementById("Artist");
    const Release=document.getElementById("relase");
    if (RecodName==null && Artist==null && Release==null){
        alert("please fill out the form");
    }
    else {
        vinylInfo.textContent="Record added!"; 
    }

}
