import React from 'react'

export default function Card({cardDeck}) {
  function displayCard(array){
    let currentCard = array.slice(0,1)
    return( 
      <div style={{border: '1px solid black'}}>
      {currentCard}
      </div>)
  }
  return (
    <div style={{width: '100px', marginLeft: '100px'}}>
      {/* כשאני מתחילה את המשחק עם זה אז זה עושה לי שגיאה כשאני מנסה לעשות slice*/}
      {/* TypeError: Cannot read properties of undefined (reading 'slice')
        at displayCard (Card.jsx:5:29)
        at Card (Card.jsx:15:8) */}
        {/* אני צריכה לשים את זה בהערה, להריץ, להוריד את ההערה ולשמור שוב את הקובץ הזה ואז רק אני רואה את הקלפים על המסך  */}
      {displayCard(cardDeck)}  
    </div>
  )
}
