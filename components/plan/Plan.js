import React from "react";
import "./plan.css";

const Plan = (props) => {
  const next = () => {
    if(props.data.plan === '' || props.data.plan.length <= 1){
      return alert('Please enter your plan')
    }else {  props.nextStep(3);}
  };

  const back = () => {
    props.prevStep(1);
  };

  return (
    <form>
      <input
        type="radio"
        id="plan"
        name="plan"
        onChange={(e) => {
          props.setData({
            ...props.data,
            plan: e.target.value,
          });
        }}
        value="Arcade"
      />
      <label htmlFor="arcade">Arcade</label>
      <br />
      <input
        type="radio"
        id="plan"
        name="plan"
        onChange={(e) => {
          props.setData({
            ...props.data,
            plan: e.target.value,
          });
        }}
        value="Advanced"
      />
      <label htmlFor="advanced">Advanced</label>
      <br />
      <input
        type="radio"
        id="plan"
        name="plan"
        onChange={(e) => {
          props.setData({
            ...props.data,
            plan: e.target.value,
          });
        }}
        value="Pro"
      />
      <label htmlFor="javascript">Pro</label>
      <br />
      <button onClick={() => next()}>Next</button>
      <br />
      <button onClick={() => back()}>Back</button>
    </form>
  );
};

export default Plan;
