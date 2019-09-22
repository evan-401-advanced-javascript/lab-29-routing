import React from 'react';

import Deck from "../Deck/deck";

/**
 * Called by index. Takes in a prop and maps through the deck calling the deck component.
 * @param props
 * @returns {*}
 * @constructor
 */
const Page = (props) => {

  const content = props.content || [];

  return (
    <>

      {content.map( (deck,i) => (
        <Deck deckData = {deck} />

      ))}
    </>
  );
};




export default Page;
