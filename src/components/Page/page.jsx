import React from 'react';

import Deck from "../Deck/deck";

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
