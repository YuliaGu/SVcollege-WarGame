import React, {useState} from 'react'

export default function HomePage({pages, setPage, setComputer, setPlayer}){
  const [currentPlayer, setCurrentPlayer] = useState()
  return(
    <div>
      <div style={{border: '1px solid black', width: '300px', height: '200px'}}>
        <h2>Ready For WAR!!!!</h2>
        <input onChange={(e) => {setCurrentPlayer(e.target.value)}} type="text" placeholder='Enter your name'/>
        {setPlayer(currentPlayer)}
        <br />
        <br />
        <button onClick={() => {setPage(pages.game)}} style={{border: '1px solid black'}}>Start</button>
      </div>

    </div>
  )
}
