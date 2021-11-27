import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const What = () => {
  return (
    <div className="content">
      <img id="platform-img" src="/img/platform-diagram.png" />
      <iframe
        width="850"
        height="500"
        src="https://www.youtube.com/embed/gQCVSVRz_uU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default What;
