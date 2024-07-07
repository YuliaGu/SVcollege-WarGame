import React, {useState, useEffect} from 'react'
import Card from '../Components/Card'

function generateCardsDeck() {
  let deck = []
  for (let i = 1; i <= 13; i++) {
      deck.push(i, i, i, i)
  }
  return deck
}

export default function GamePage({pages, setPage, setPlayer, player, setComputer, computer, 
                        playerTotalWins, setPlayerTotalWins, playerTotalLosses, 
                        setPlayerTotalLosses, computerTotalWins, setComputerTotalWins, 
                        computerTotalLosses, setComputerTotalLosses}){
  const [deck, setDeck] = useState(() => {
    return generateCardsDeck()})

  const [playerGameWins, setPlayerGameWins] = useState(0)
  const [playerGameLosses, setPlayerGameLosses] = useState(0)
  const [computerGameWins, setComputerGameWins] = useState(0)
  const [computerGameLosses, setComputerGameLosses] = useState(0)

  function randomizeCards(root){
    const shuffledRoot = root.sort(() => Math.random() - 0.5);
    const halfway = Math.floor(shuffledRoot.length / 2);
    setPlayer({
      ...player,
      cardDeck: [...shuffledRoot.slice(0, halfway)]
    })
    setComputer({
      cardDeck: [...shuffledRoot.slice(halfway)]
    })
    // console.log(player.cardDeck)
  }

  useEffect(()=>{
    randomizeCards(deck)
  }, [])

  // function setPlayersDeck(){ 
  //   setPlayer({
  //     ...player,
  //     cardDeck: [7, 3, 10, 11, 9, 1, 12, 7, 9, 1, 9, 12, 3, 2, 11, 2, 6, 5, 7, 6, 3, 9, 2, 4, 11,13]
  //   })
  //   setComputer({
  //     cardDeck: [5, 6, 1, 4, 10, 2, 13, 4, 10, 13, 5, 11, 4, 8, 8, 10, 6, 8, 7, 8, 3, 12, 1, 13, 5, 12]
  //   })
  // }
  
  // useEffect(()=>{
  //   setPlayersDeck()
  // }, [])

  function displyCurrentPlay(){
    return(
      <div>
        <h4>Computer</h4>
        <Card cardDeck={computer.cardDeck}/>
        <br />
        <Card cardDeck={player.cardDeck}/>
        <h4>Player</h4>
      </div>
    )
  }

  function calculateScore(){
    if(player.cardDeck[0] > computer.cardDeck[0]){
      setPlayerGameWins(playerGameWins + 1)
      setComputerGameLosses(computerGameLosses + 1)
    }
    else if(player.cardDeck[0] < computer.cardDeck[0]){
      setPlayerGameLosses(playerGameLosses + 1)
      setComputerGameWins(computerGameWins + 1)
    }
  }

  function calculateTotalScore(){
    if(playerGameWins > computerGameWins){
      setPlayerTotalWins(playerTotalWins + 1)
      setComputerTotalLosses(computerTotalLosses + 1)
      setPage(pages.score)
    }
    else if(playerGameWins < computerGameWins){
      setPlayerTotalLosses(playerTotalLosses + 1)
      setComputerTotalWins(computerTotalWins + 1)
      setPage(pages.score)
    }
  }

  function updateDecks(){
    setPlayer({
      ...player,
      cardDeck: [...player.cardDeck.slice(1)]
    })
    setComputer({
      cardDeck: [...computer.cardDeck.slice(1)]
    })
  }

  return(
    <div style={{border: '1px solid black', width: '300px', height: '300px'}}>
      {displyCurrentPlay()}
      <button onClick={()=>{
        calculateScore()
        updateDecks()
        displyCurrentPlay()
        if(player.cardDeck.length == 1){
          calculateScore()
          calculateTotalScore()
        }}} style={{border: '1px solid black'}}>Next</button>
    </div>
  )
}

