import React from 'react'

import Card from '../Card/card'

/**
 * Is called by page. Takes in a prop and renders the card from the JSON file.
 * @param props
 * @returns {*}
 */
export default props => {
 const deck = props.deckData;
  return(
    <>
      <section className="deck">
        <header><h2>{deck.title}</h2></header>

        {deck.records.map( (card) =>
          <Card cardData = {card} />
        )}
       </section>
    </>
      )
    };

