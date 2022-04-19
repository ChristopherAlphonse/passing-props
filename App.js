import React from 'react';

function App(props) {
  return (
    <div className="dotted">
      <img className="omg" src={props.imgSrc} />
      <h1 className="smh"> {props.name} </h1>
    </div>
  );
}

export default App;
