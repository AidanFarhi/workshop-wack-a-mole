

let score = 0;
var scoreDisplay = document.getElementById('score');

var holes = Array.from(document.getElementsByClassName('hole'))

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

setInterval(function() {
    let randomHoleIndex = Math.floor(getRandom(0, holes.length))
    console.log(randomHoleIndex)
    return holes[randomHoleIndex].classList.toggle('mole')
}, 300)

const gameArea = document.getElementById('whack-a-mole')

gameArea.addEventListener('click', function(click) {
    if (click.target.matches('.mole')) {
        console.log('hit!!')
    }
});

