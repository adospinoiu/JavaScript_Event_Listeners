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
// grandparent.addEventListener("click", e => {
//     console.log("Grandparent Bubble")
// })

// parent.addEventListener("click", e => {
//     console.log("Parent Bubble")
// }, { once: true })

// child.addEventListener("click", e => {
//     console.log("Child Bubble")
// })

// #############################################################

// To run an event as many times as you want .. and then remove it
// grandparent.addEventListener("click", e => {
//     console.log("Grandparent Bubble")
// })

// parent.addEventListener("click", printHi)

// setTimeout(() => {
//     parent.removeEventListener("click", printHi)
// }, 2000)

// child.addEventListener("click", e => {
//     console.log("Child Bubble")
// })

// function printHi() {
//     console.log("Hi")
// }

//#################################################################

// #### To delegate events
const divs = document.querySelectorAll('div')

// #### This creates an event listener for all the divs on the html page
// #### However, for the <div> created, it will not listen for it; because the <div> created is AFTER this ling of code. (See alternate solution below)
// divs.forEach(div => {
//     div.addEventListener("click", () => {
//         console.log("Hi")
//     })
// })

// #### Alternate solution for ALL <divs> to have event listeners
// document.addEventListener("click", e => {
//     if (e.target.matches(("div")) {
//         console.log("Hi")
//     }
// })

// Below a BETTER WAY to write the alternate solution for have an event listener on all divs
addGlobalEventListener("click", "div", e => {
    console.log("Hi")
})

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}

// This creates and adds a new <div> to the html page
const newDiv = document.createElement("div")
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "purple"
document.body.append(newDiv)