let turnCount = 0
let game = {
    currentPlayer: 'X',
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
}
console.log("Let's play Tic Tac Toe! Press Enter to play.")

process.stdin.once('data', (chunk) => {

    printGameBoard(game.board)
    console.log("Ready Player " + game.currentPlayer)
    console.log("Move to?")
    gameTurn()

})

function printGameBoard(board) {

    let firstLine = " " + board[0] + ' | ' + board[1] + ' | ' + board[2]
    let horizontalSpacer = "---|---|---"
    let secondLine = " " + board[3] + ' | ' + board[4] + ' | ' + board[5]
    let thirdLine = " " + board[6] + ' | ' + board[7] + ' | ' + board[8]

    console.log(firstLine)
    console.log(horizontalSpacer)
    console.log(secondLine)
    console.log(horizontalSpacer)
    console.log(thirdLine)

}
function gameTurn() {

    process.stdin.once('data', (chunk) => {
        
        let playerChosenLocation = chunk.toString().trim()
        let locationIndex = playerChosenLocation - 1
        
        
        if (isEntryValid(playerChosenLocation, game.board)) {

            let winHasHappened = detectWinState(game.board, game.currentPlayer)
        
            if (winHasHappened) {
                console.log("Congratulations! " + game.currentPlayer + " wins!")
                process.exit()
            }

            if (checkForDraw()) {
                console.log("It's a draw.")
                process.exit()

            }
            
            game.board[locationIndex] = game.currentPlayer

            togglePlayer()
            printGameBoard(game.board)
            gameTurn()

        }

        else {
            console.log("Invalid Input!")
            gameTurn()

        }
    })
}

//checking if playerInput is a valid number
function isEntryValid(value, board) {

    if (board.indexOf(parseInt(value)) === -1) {
        console.log("Please ONLY enter a number between 1 and 9.")
        return false

    } else {
        console.log ("this is " + value)
        if (inputAlreadyUsed(value)) {
            console.log ("This space has already been used. Please pick another one.")
            return false
        }
        else {
            return true
        }


    }
}

//when winstate is achieved, it is somehow connected to this following function and says this space has already been used , invalid input.
function inputAlreadyUsed(location) {
    if (game.board[location] === "X" || game.board[location] === "O") {
        return true
    }

    return false

}


function detectWinState(board, currentPlayer) {

    //console.log('Debug: ' + board[0] + ' ' + board[1] + ' ' + board[2] + ' - - ' + currentPlayer)

    if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) {
        return true
    }
    if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) {
        return true
    }
    if (board[6] === board[7] && board[7] === board[8]) {
        return true
    }
    if (board[0] === board[4] && board[4] === board[8]) {
        return true
    }
    if (board[2] === board[4] && board[4] === board[6]) {
        return true
    }
    if (board[0] === board[3] && board[3] === board[6]) {
        return true
    }
    if (board[1] === board[4] && board[4] === board[7]) {
        return true
    }
    if (board[2] === board[5] && board[5] === board[8]) {
        return true
    }

    return false

}

function checkForDraw() {
    if (game.turnCount === 9) {
        return true
    }

    return false
}

function togglePlayer(){
    if (game.currentPlayer === "X") {
        game.currentPlayer = "O"
    }
    else {
        game.currentPlayer = 'X'
    }
}








