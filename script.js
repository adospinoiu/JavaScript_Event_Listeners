const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

// Add a Click_Event_Listener
// There are other event listeners available besides a CLICK
// The addEventListener takes the event (i.e. CLICK) and a call back function that is to be performed every time that event occurs

// grandparent.addEventListener("click", e => {
//     //This will console.log information from the DOM
//     // console.log(e);
//     //This will console.log the <div> that is clicked
//     // console.log(e.target);

//     console.log("Grandparent")
// });

// parent.addEventListener("click", e => {
//     console.log("Parent")
// });

// child.addEventListener("click", e => {
//     console.log("Child")
// })

// document.addEventListener("click", e => {
//     console.log("Document")
// })

// ##############################################################

// Add a event Bubbling/Capturing
// Bubble working "from in to out" and Capture works "from out to in"
// grandparent.addEventListener("click", e => {
//     console.log("Grandparent Capture")
// }, { capture: true })

// grandparent.addEventListener("click", e => {
//     console.log("Grandparent Bubble")
// })

// parent.addEventListener("click", e => {
//     console.log("Parent Capture")
// }, { capture: true })

// parent.addEventListener("click", e => {
//     console.log("Parent Bubble")
// })

// child.addEventListener("click", e => {
//     console.log("Child Capture")
//     //To STOP the propagation on this step. (Movable to any other step)
//     e.stopPropagation()
// }, { capture: true })

// child.addEventListener("click", e => {
//     console.log("Child Bubble")
// })

// document.addEventListener("click", e => {
//     console.log("Document Capture")
// }, { capture: true })

// document.addEventListener("click", e => {
//     console.log("Document Bubble")
// })

// ############################################################

// To run an event only once add the { once: true }
grandparent.addEventListener("click", e => {
    console.log("Grandparent Bubble")
})

parent.addEventListener("click", e => {
    console.log("Parent Bubble")
}, { once: true })

child.addEventListener("click", e => {
    console.log("Child Bubble")
})

// #############################################################

// To run an event as many times as you want .. and then remove it