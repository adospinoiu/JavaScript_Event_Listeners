const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// Add a Click_Event_Listener
// There are other event listeners available besides a CLICK
// The addEventListener takes the event (i.e. CLICK) and a call back function that is to be performed every time that event occurs
grandparent.addEventListener("click", e => {
    //This will console.log information from the DOM
    console.log(e);
    //This will console.log the <div> that is clicked
    console.log(e.target);

})