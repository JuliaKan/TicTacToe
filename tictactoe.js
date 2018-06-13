// let gameboard = {
//     rowone:[1,2,3],
//     rowtwo:[4,5,6],
//     rowthree:[7,8,9]
// }
//let gameboard = [1,2,3,4,5,6,7,8,9]

let game = {
    currentPlayer: 'X',
    board: [1,2,3,4,5,6,7,8,9]
}

 //{}if you want to use an object
//let gameboard = [] if you want to use an array
console.log ("Let's play Tic Tac Toe! Press Enter to play.")

process.stdin.once('data', (chunk) =>{
    //call the function to print the gameboard
    printGameBoard(game.board)
    console.log("Ready Player " + game.currentPlayer)
    console.log("Move to?")
    gameTurn()
    
})

function printGameBoard(board){

    // let firstLine = board['rowone'][0] + ' | ' + board['rowone'][1] + ' | ' + board['rowone'][2]
    // let horizontalSpacer = "--- --- ---"
    // let secondLine = board['rowtwo'][0] + ' | ' + board['rowtwo'][1] + ' | ' + board['rowtwo'][2]
    // let thirdLine = board['rowthree'][0] + ' | ' + board['rowthree'][1] + ' | ' + board['rowthree'][2]

    let firstLine = board[0] + ' | ' + board[1] + ' | ' + board[2]
    let horizontalSpacer = "--- --- ---"
    let secondLine = board[3] + ' | ' + board[4] + ' | ' + board[5]
    let thirdLine = board[6] + ' | ' + board[7] + ' | ' + board[8]

    console.log(firstLine)
    console.log(horizontalSpacer)
    console.log(secondLine)
    console.log(horizontalSpacer)
    console.log(thirdLine)

    

    //board['rowone'][0] = 'X'
}
function gameTurn(){
    
    process.stdin.once('data', (chunk) =>{
        let gameBoardLocation = (chunk.toString().trim()) - 1
        //console.log ('gameBoardLocation: ' + gameBoardLocation)
        //console.log ('gameBoardvalue: ' + game.board[gameBoardLocation])
        //let actualLocation = gameBoardLocation - 1
        if (game.board[gameBoardLocation] === "X" || game.board[gameBoardLocation] === "O"){ 
            console.log ("Impossible! That cell is already full.")
            return gameTurn()
        }
        else {
            //update game state
            game.board[gameBoardLocation] = game.currentPlayer

            //decide how to change player
            if (game.currentPlayer === "X"){
                game.currentPlayer = "O"
            }
            else {
                game.currentPlayer = 'X'
            }
            

            printGameBoard(game.board)
            
            console.log("Ready Player " + game.currentPlayer)
            console.log("Move to?")
            gameTurn()
    }
        
    })
}







