import { useState } from 'react'
import HomePage from './Views/HomePage'
import GamePage from './Views/GamePage'
import ScorePage from './Views/ScorePage'
import './App.css'

const pages = {
  home: 0,
  game: 1,
  score: 2
}

function App(){
  const [page, setPage] = useState(pages.home)
  const [player, setPlayer] = useState({})
  const [computer, setComputer] = useState({})

  const [playerTotalWins, setPlayerTotalWins] = useState(0)
  const [playerTotalLosses, setPlayerTotalLosses] = useState(0)
  const [computerTotalWins, setComputerTotalWins] = useState(0)
  const [computerTotalLosses, setComputerTotalLosses] = useState(0)

  function displayPage(){
    if(page == pages.game){
      return <GamePage  pages={pages} setPage={setPage} setPlayer={setPlayer} 
              player={player} setComputer={setComputer} computer={computer}
              playerTotalWins={playerTotalWins} setPlayerTotalWins={setPlayerTotalWins}
              playerTotalLosses={playerTotalLosses} setPlayerTotalLosses={setPlayerTotalLosses}
              computerTotalWins={computerTotalWins} setComputerTotalWins={setComputerTotalWins}
              computerTotalLosses={computerTotalLosses} setComputerTotalLosses={setComputerTotalLosses}/>
    }
    else if(page == pages.score){
      return <ScorePage pages={pages} setPage={setPage} playerTotalWins={playerTotalWins} playerTotalLosses={playerTotalLosses}/>
    }
    return <HomePage pages={pages} setPage={setPage} setPlayer={setPlayer}/>
  }

  return(
    <div>
      {displayPage()}
    </div>
  )
}

export default App
