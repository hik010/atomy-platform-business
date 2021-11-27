import React from "react";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const What = () => {
  return (
    <div className='content'>
      <h1> Atomy Platform Business</h1>
      <p>{lorem.generateParagraphs(3)}</p>

    </div>
  )
}

export default What;
