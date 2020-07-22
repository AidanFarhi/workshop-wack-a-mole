
// set up our variables here
let score = 0;
var scoreDisplay = document.getElementById('score');
var holes = Array.from(document.getElementsByClassName('hole'))
const gameArea = document.getElementById('whack-a-mole')

// this function gets us a randam number in a range
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// this fires whatever we put here at an interval set by us
setInterval(function() {
    let randomHoleIndex = Math.floor(getRandom(0, holes.length))
    console.log(randomHoleIndex)
    return holes[randomHoleIndex].classList.toggle('mole')
}, 300)

// this is where the action happens
gameArea.addEventListener('click', function(click) {
    if (click.target.matches('.mole')) {
        score++
        scoreDisplay.innerHTML = score
        click.target.classList.toggle('mole')
    }
});
