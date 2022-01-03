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
      <p>
        <strong>
          Atomy Platform Business is a network marketing company which skips the middleman between the consumers and
          producers, delivering the products with{' '}
          <span style={{color: '#00b6f0'}}>absolute quality at absolute price</span> as Atomy's motto.
        </strong>
      </p>
      <iframe
        width="850"
        height="500"
        src="https://www.youtube.com/embed/gQCVSVRz_uU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>Please click <a href='https://www.youtube.com/watch?v=gQCVSVRz_uU' target="_blank" style={{color: 'red'}}>here</a> to watch the video.</p>
      <h2>How to Join Us:</h2>
      <p>1. Click Join Us Button on the top</p>
      <p>2. Enter the following credentials</p>
      <p style={{ paddingLeft: '1.5rem' }}>ID: 12533567</p>
      <p style={{ paddingLeft: '1.5rem' }}>Password: 123456</p>
      <p>3. Please choose one of the following Sponser IDs</p>
      <p style={{ paddingLeft: '1.5rem' }}> 29372598, 25788257, 26579684</p>
      <b> Contact for more info</b>
      <p style={{ paddingLeft: '1.5rem' }}>
        WeChat ID / KakaoTalk ID: yskimgs787
      </p>
      <p style={{ paddingLeft: '1.5rem' }}>Email: atomykys0426@gmail.com</p>
    </div>
  );
};

export default What;
