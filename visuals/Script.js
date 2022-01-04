document.getElementById('vinylInfo');
var loggInnEpost=document.forms["loggInn"]["email"].value;
var loggInnPassord=document.forms["loggInn"]["passord"].value;
function LoggIn(){
if(loggInnEpost==""){
alert("fill in your mail");
}
if(loggInnPassord==""){
alert("write in your password");
}
else {
    window.location.href="Upage.html";
}
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
    var RecordName=document.forms["new_Record"]["recordName"].value;
    var Artist=document.forms["new_Record"]["artist"].value;
    var Release=document.forms["new_Record"]["releaseYear"].value;
    if (RecordName==""){
        alert("Fill out the name of the  record");
    }
    if (Artist==""){
        alert("fil out the name of the artist");
    }
    if(Release==""){
        alert("fill out the date");
    }
    else{
        alert("cool, sweet, nice");
    }
}
