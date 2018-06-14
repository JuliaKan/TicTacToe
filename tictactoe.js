
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

    let firstLine = board[0] + ' | ' + board[1] + ' | ' + board[2]
    let horizontalSpacer = "--- --- ---"
    let secondLine = board[3] + ' | ' + board[4] + ' | ' + board[5]
    let thirdLine = board[6] + ' | ' + board[7] + ' | ' + board[8]

    console.log(firstLine)
    console.log(horizontalSpacer)
    console.log(secondLine)
    console.log(horizontalSpacer)
    console.log(thirdLine)

}
function gameTurn() {

    process.stdin.once('data', (chunk) => {

        let gameBoardLocation = (chunk.toString().trim()) - 1
 
        if (game.board[gameBoardLocation] === "X" || game.board[gameBoardLocation] === "O") {
            console.log("Impossible! That cell is already full.")
            return gameTurn()
        }

        let winHasHappened = detectWinState(game.board, game.currentPlayer)

        if (winHasHappened) {
            console.log("Congratulations! " + game.currentPlayer + " wins!")
            process.exit()

        } else {

            game.board[gameBoardLocation] = game.currentPlayer

            //decide how to change player
            if (game.currentPlayer === "X") {
                game.currentPlayer = "O"
            }
            else {
                game.currentPlayer = 'X'
                //return gameTurn()
            }
            //update game state

            printGameBoard(game.board)

            let newTurnCount = turnCount++
            //console.log(newTurnCount)
    
            if (turnCount === 9) {
                console.log("It's a draw.")
                process.exit
            }
            console.log("Ready Player " + game.currentPlayer)
            console.log("Move to?")
            gameTurn()

        }

    })
}
//work in progress. does not console.log winner statement because of problem with current player, see next line.
function detectWinState(board, currentPlayer) {

    if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) {
        return true
    }
    if (board[3] === currentPlayer && board[4] ===currentPlayer && board[5] === currentPlayer) {
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









