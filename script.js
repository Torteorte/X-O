let playerTurn = document.getElementById("player-turn")
let winner = document.querySelector(".winner")
let restartButton = document.querySelector(".restart")

let arrayButtons = [
    {id: 1}, 
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9}
]

let toHTML = arrayButton => `
    <button class="game-field" id="id${arrayButton.id}" onclick="game(id${arrayButton.id})"></button>
`

function createHTML() {
    const html = arrayButtons.map(toHTML).join('')
    document.querySelector('.container-buttons').innerHTML = html
}

createHTML()

let gameFields = document.querySelectorAll(".game-field")

function game(activeButton) {
    activeButton.textContent = playerTurn.value

    if (playerTurn.value == "X") {
        playerTurn.value = "O"
        playerTurn.style.color = "FireBrick"
    } else {
        playerTurn.value = "X"
        playerTurn.style.color = "ForestGreen"
    }

    activeButton.classList.toggle("hidden-symbol")
    activeButton.disabled = true

    if (check("X")) {
        winner.insertAdjacentHTML("afterbegin", `Победил: <span class="green">Х<span>`)
    } else if (check("O")) {
        winner.insertAdjacentHTML("afterbegin", `Победил: <span class="red">O<span>`)
    }

    blockButtons()
    noWinner()
}

function check(player) {
    if (id1.textContent == player && id2.textContent == player && id3.textContent == player ||
        id4.textContent == player && id5.textContent == player && id6.textContent == player ||
        id7.textContent == player && id8.textContent == player && id9.textContent == player ||
        id1.textContent == player && id4.textContent == player && id7.textContent == player ||
        id2.textContent == player && id5.textContent == player && id8.textContent == player ||
        id3.textContent == player && id6.textContent == player && id9.textContent == player ||
        id3.textContent == player && id6.textContent == player && id9.textContent == player ||
        id1.textContent == player && id5.textContent == player && id9.textContent == player ||
        id3.textContent == player && id5.textContent == player && id7.textContent == player
        ) return true
}

function blockButtons() {
    if (winner.textContent != false) {
        gameFields.forEach((gameField) => gameField.disabled = true)
    }
}

        // winner.textContent ? gameField.disabled = true : gameField.disabled = false

function noWinner() {
    if (winner.textContent == "" && 
        id1.textContent != false && id2.textContent != false && id3.textContent != false &&
        id4.textContent != false && id5.textContent != false && id6.textContent != false &&
        id7.textContent != false && id8.textContent != false && id9.textContent != false
        ) return winner.textContent = "Победителя нет"
}

restartButton.addEventListener("click", restart)

function restart() {
    for (let gameField of gameFields) {
        gameField.disabled = false
        gameField.textContent = ""
        winner.textContent = ""
    }
}