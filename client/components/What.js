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
      <h2>How to Join Us:</h2>
      <p>1. Click Join Us Button on the top</p>
      <p>2. Enter the following credentials</p>
      <p style={{paddingLeft: '1.5rem'}}>ID: 1233567</p>
      <p style={{paddingLeft: '1.5rem'}}>Password: 123456</p>
      <p>3. Please contact me for more info and Sponser ID</p>
      <p style={{paddingLeft: '1.5rem'}}>weChat ID / KakaoTalk ID: yskimgs787</p>
      <p style={{paddingLeft: '1.5rem'}} >Email: atomykys0426@gmail.com</p>
    </div>
  );
};

export default What;
