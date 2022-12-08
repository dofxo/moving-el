// El selection
const theFaceEl = document.querySelector('#smiley-face')
const eyesEl = document.querySelectorAll('.eye')


// matterials
let xDirection = 0
let yDirection = 0


// window event listener for keyDown (moves the face dependently)
window.addEventListener('keydown', (event) => {

    // moves right for 10px
    if (event.key === 'ArrowRight') {
        xDirection += 10
    }
    // moves left for 10px
    else if (event.key === 'ArrowLeft') {
        xDirection -= 10
    }
    // moves top for 10px
    else if (event.key === 'ArrowUp') {
        yDirection -= 10

    }
    // moves bottom for 10px
    else if (event.key === 'ArrowDown') {
        yDirection += 10
    }


    theFaceEl.style.top = `${yDirection}px`
    theFaceEl.style.left = `${xDirection}px`
})

// restarts the element posotion randomly

let randomXDirection, randomYDirection

theFaceEl.addEventListener('click', () => {
    // random width
    randomXDirection = Math.floor(Math.random() * window.innerWidth)
    xDirection = randomXDirection
    // random height
    randomYDirection = Math.floor(Math.random() * window.innerHeight)
    yDirection = randomYDirection

    theFaceEl.style.top = `${randomYDirection}px`
    theFaceEl.style.left = `${randomXDirection}px`


})