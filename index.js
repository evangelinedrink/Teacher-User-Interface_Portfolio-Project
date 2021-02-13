//Creating an event listener: When user clicks on a button in the webpage, the activeWindow function will then run.
const buttonClick1= document.querySelectorAll("button");
buttonClick1.addEventListener("click", activeWindow);

function activeWindow() {
    //Need to find a way to identify which button was clicked using their id. Then the function will use switch statement to determine which display to show.
    const clickID= this.id; //Identifier "this" will refer to the DOM element that was clicked on.
    switch(clickID) {
        case "attendance":
            document.getElementById("attendance").style.display="show"; //This will show the Attendance Page
            break;
        case "grades":
            document.getElementById("grades").style.display="show";
            break;
        case "assignments":
            document.getElementById("assignments").style.display="show";
            break;
        case "announcements":
            document.getElementById("announcements").style.display="show";
            break;
        case "constactps":
            document.getElementById("contactps").style.display="show";
            break;
        default:
            document.getElementById("notes").style.display="show";
    }
    //let iframeActive= document
    //let activeIframe=document.getElementById("iframe");
}