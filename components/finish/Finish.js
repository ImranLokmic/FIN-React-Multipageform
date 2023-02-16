import React from "react";
import './finish.css'

const Finish = (props) => {
  const back = () => {
    props.prevStep(1);
  };

  return (
    <>
      {console.log(props.data)}
      <br />
      <button onClick={() => back()}>Restart</button>
    </>
  )
}

export default Finish