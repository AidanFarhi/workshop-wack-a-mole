
// set up our variables here
let score = 0;
var scoreDisplay = document.getElementById('score');
var holes = Array.from(document.getElementsByClassName('hole'))
const gameArea = document.getElementById('whack-a-mole')
const speedToggle = document.getElementById('speed-buttons')
var speed = 700

// random num
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
};

//this populates our regular moles every .7 seconds
var populate = setInterval(function() {

    let randomHoleIndex = Math.floor(getRandom(0, holes.length))
    let randomHoleIndex2 = Math.floor(getRandom(0, holes.length))
    let randomHoleIndex3 = Math.floor(getRandom(0, holes.length))
    let randomHoleIndex4 = Math.floor(getRandom(0, holes.length))
    holes[randomHoleIndex].classList.toggle('mole')      
    holes[randomHoleIndex2].classList.toggle('mole')    
    holes[randomHoleIndex3].classList.toggle('mole')      
    holes[randomHoleIndex4].classList.toggle('mole')  
     
}, 700);

// lets make a special mole pop up every 5 seconds
setInterval(function() {
    let randomHoleIndex = Math.floor(getRandom(0, holes.length))
    holes[randomHoleIndex].classList.toggle('special')
}, 5000)

// gets rid of image when clicked, and adds to score
gameArea.addEventListener('click', function(click) {
    if (click.target.matches('.mole')) {
        score++
        scoreDisplay.innerHTML = score
        click.target.classList.toggle('mole')
    } else if (click.target.matches('.special')) {
        score += 100
        scoreDisplay.innerHTML = score
        click.target.classList.toggle('special')
    }
})

// speedToggle.addEventListener('click', function(click) {
//     if (click.target.matches('.slow')) {
//         console.log('hit slow')
//         console.log('speed:', speed)
//         speed = 5000
//     } else if (click.target.matches('.normal')) {
//         console.log('hit normal')
//         console.log('speed:', speed)
//         speed = 700
//     } else if (click.target.matches('.fast')) {
//         console.log('hit fast')
//         console.log('speed:', speed)
//         speed = 100
//     }
// })
