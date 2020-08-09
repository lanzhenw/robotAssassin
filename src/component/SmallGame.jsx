import React, { useState, useEffect } from 'react'

const SmallGame = () => {

  const initialState = {
    board: [],
    n: 0
  }
  const [state, setstate] = useState(initialState)
  var board = new Object()



  useEffect(() => {
    // when the game first load

    fetch("http://localhost:3000/boards/game_board_small.txt")
      .then(response => response.text())
      .then(text => {
        const data = text.split("\n")
        // console.info("data", data)
        data.forEach(line => {
          const locationName = line.split(" ")[0]
          board[locationName] = new Object
          board[locationName]["up"] = null
          board[locationName]["left"] = null
          board[locationName]["right"] = null
          board[locationName]["down"] = null
          board[locationName]["name"] = locationName
          const locationLinks = line.split(" ").slice(1)
          locationLinks.forEach(element => {
            const direction = element.split("=")[0]
            const linkName = element.split("=")[1]
            board[locationName][direction] = linkName
          })
        })
        console.info(board)
        // data.forEach(line => {
        //   let location = line.split(" ")[0]
        //   let up = 0;
        //   let left = 0
        //   let n = 0; 
        //   let m = 0
        //   // while (n<28 && board[location].left){
        //   //     left ++
        //   //     location = board[location].left
        //   //     n++       
        //   // }
        //   // location = line.split(" ")[0]
        //   // while (m<28 && board[location].up){
        //   //     up ++
        //   //     location = board[location].ip
        //   //     m++
        //   // }
        //   location = line.split(" ")[0]
        //   console.log(location + "index: (", left, + " ," + up + ")" )
        // })
      })


        setstate(s => ({ ...s, board: [[[1, null, "locationName"], [0, null, "locationName"], [1, null, "location"], [0, "bot4", "location"]], [[1, "bot1", "location",], [1, "bot2", "location"]]] }))
      }, [])

    return (
      <div className='gameBoard'>
        {state.board.map((row, i) => (
          <div key={i} className='row'>
            {row.map((col, j) => (
              <span key={j} className={'cell cell-' + state.board[i][j][0]}><span className={state.board[i][j][1] ? " bot-occupied" : "bot"} />{state.board[i][j][2]}</span>
            ))}
          </div>
        ))}
      </div>
    )
  }

export default SmallGame
