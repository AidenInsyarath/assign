const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

const ball = document.createElement('div')
document.body.appendChild(ball)
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
const Score = document.createElement('div')
document.body.appendChild(Score)
let LPaddleWidth = 10
let LPaddleHeight = 100
let LPaddleSpeed = 15
let LPaddleXPosition = 70
const ballRadius = 20
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let ballXPosition = windowHeight / 2 - ballRadius
let ballYPosition = windowHeight / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYDirection = 1
let ScoreXPosition = 570//Display the score and increase the score by 1 everytime the ball hits the padel.
let ScoreYPosition = 20
let ScoreWidth = 200
let ScoreHeight = 110
let score = 0
let level = 1
let gameOver = false //Display the level and increase the level by one everytime the score increases by 10
//As levels increase increase the ball speed
//if ball gets past your padel, end the game.
//make the ball stop or dispear and then let the user know the game is over.
//Optional: sound effects, background music
setInterval(moveBall, 10)

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth

    if(
        (ballBottom >= LPaddleTop) &&
        (ballTop <=LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ){
        ballXDirection  = ballXDirection * -1
        updateScore()
     }
     if (ballXPosition <= 0) {
        endGame()
    }
    function moveBall() {
        if (gameOver) return;
    }
}

createLPaddle()
createBall()
createScore()

function createBall() {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "gold"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballYPosition}px`
}



function createLPaddle() {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'black'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = "50px"
    LPaddle.style.top = `${windowHeight / 2 - LPaddleHeight / 2}px`
}

function createScore() {
    Score.style.position = "absolute"
    Score.style.top = `${ScoreYPosition}px`
    Score.style.left = `${ScoreXPosition}px`
    Score.style.color = "blue"
    Score.style.fontSize = "24px"
    Score.style.left = "50%"


    Score.innerText = `Score: ${score} | Level: ${level}`
}



wKey = false
sKey = false

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})


function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}


function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}
animate()

function updateScore() {
    score = score + 1
    if (score % 10 == 0) {
        level = level + 1
        ballSpeed = ballSpeed + 1
    }
    Score.innerText = `Score: ${score} | Level: ${level}`
}

function endGame() {
    gameOver = true
    ball.style.display = 'none'
    const gameOverMsg = document.createElement('div')
    gameOverMsg.innerText = "Game Over!"
    gameOverMsg.style.position = "absolute"
    gameOverMsg.style.top = `${windowHeight / 2 - 40}px`
    gameOverMsg.style.left = `${windowWidth / 2 - 100}px`
    gameOverMsg.style.left = "50%"
    gameOverMsg.style.fontSize = "40px"
    gameOverMsg.style.color = "red"
    document.body.appendChild(gameOverMsg)
}
