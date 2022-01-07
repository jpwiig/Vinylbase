document.getElementById('vinylInfo');

/*var InnEpost=document.forms["innlogging"]["epost"].value;
var InnPassord=document.forms["innlogging"]["passord"].value;*/
var InnEpost = document.forms["innlogging"]["epost"].value;
var InnPassord = document.forms["innlogging"]["passord"].value;
function Logginn() {

    if (InnEpost == "") {
        alert(" please fill in your mail");
        return false;
    }

    if (InnPassord == "") {
        alert("write in your password");
        return false;
    }
    else {
        alert("All good");
       top.location="Upage"
    }
}

function showCollection() {
    vinylInfo.textContent = "Your collection: ";
}

//if loops in JavaScript
document.getElementById("nyPlate");

function addRecord() {
    //hentet fra: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
    if (nyPlate.style.display === "none") {
        nyPlate.style.display = "block";
    } else {
        nyPlate.style.display = "none";
    }

}

function removeRecord() {
    vinylInfo.textContent = "What record do you want to remove?";
}


function addedRecord() {
    var RecordName = document.forms["new_Record"]["recordName"].value;
    var Artist = document.forms["new_Record"]["artist"].value;
    var Release = document.forms["new_Record"]["releaseYear"].value;
    if (RecordName == "") {
        alert("Fill out the name of the  record");
    }
    if (Artist == "") {
        alert("fil out the name of the artist");
    }
    if (Release == "") {
        alert("fill out the date");
    } else {
        alert("cool, sweet, nice");
    }
}
$(".gallery").click(function (){
    $("gallery").slideDown();
});