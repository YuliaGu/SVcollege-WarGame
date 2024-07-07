import React from 'react'

export default function ScorePage({pages, setPage, playerTotalWins, playerTotalLosses}){
  return(
    <div style={{border: '1px solid black', width: '150px', height: '150px'}}>
      <p>Lose/Win</p>
      <p>{playerTotalLosses} - {playerTotalWins}</p>
      <button onClick={() => {setPage(pages.game)}} style={{border: '1px solid black'}}>Again?</button>
    </div>
  )
}
