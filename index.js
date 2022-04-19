import React from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './App.js';

function Profile() {
  return (
    <div>
      <App
        imgSrc="https://vignette.wikia.nocookie.net/phineasandferb/images/6/68/Perry_smiling_avatar.png/revision/latest?cb=20100118055301"
        name="Perry The Platypus"
      />
      <App
        name="Major Monogram"
        imgSrc="https://vignette.wikia.nocookie.net/phineasandferb/images/b/be/Monogram_-_Rollercoaster_avatar_1.png/revision/latest?cb=20100131231239 "
      />
      <App
        name="Heinz Doofenshmirtz"
        imgSrc="https://vignette.wikia.nocookie.net/phineasandferb/images/6/6a/Doofenshmirtz_official.jpg/revision/latest/scale-to-width-down/240?cb=20140503030926"
      />
    </div>
  );
}

render(<Profile />, document.getElementById('my-app'));
