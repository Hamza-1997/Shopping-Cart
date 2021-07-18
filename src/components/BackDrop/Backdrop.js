import React from 'react';
import '../BackDrop/Backdrop.css';
// Reuseable component
function Backdrop(props) {
  return <div className={props.show ? 'backDrop active' : 'backDrop'}></div>;
}

export default Backdrop;
