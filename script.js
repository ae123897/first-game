const player = document.getElementById("player");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");

let x = 180;
let y = 180;
const step = 10;
const areaSize = 1100;
const playerSize = 80;
let score = 0;
const coinSize = 20;
let coinCount = 8; 


function createCoin() {
    const coin = document.createElement("div");
    coin.classList.add("coin");

    const maxPos = areaSize - coinSize;
    coin.style.left = Math.floor(Math.random() * maxPos) + "px";
    coin.style.top = Math.floor(Math.random() * maxPos) + "px";

    gameArea.appendChild(coin);
}

function spawnCoins(count) {
    for (let i = 0; i < count; i++) {
        createCoin();
    }
}

spawnCoins(coinCount);


function checkCollision() {
    const coins = document.querySelectorAll(".coin");
    coins.forEach((coin) => {
        const coinX = parseInt(coin.style.left);
        const coinY = parseInt(coin.style.top);

        if (
            x < coinX + coinSize &&
            x + playerSize > coinX &&
            y < coinY + coinSize &&
            y + playerSize > coinY
        ) {
            coin.remove();
            score++;
            scoreDisplay.textContent = score;
            createCoin();
        }
    });
}


document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" && y - step >= 0) {
        y -= step;
    } else if (event.key === "ArrowDown" && y + step <= areaSize - playerSize) {
        y += step;
    } else if (event.key === "ArrowLeft" && x - step >= 0) {
        x -= step;
    } else if (event.key === "ArrowRight" && x + step <= areaSize - playerSize) {
        x += step;
    }

    player.style.top = y + "px";
    player.style.left = x + "px";

    checkCollision();
});
