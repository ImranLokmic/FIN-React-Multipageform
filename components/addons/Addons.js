import React from "react";
import "./addons.css";

const Addons = (props) => {
  const next = () => {
    props.nextStep(4);
  };

  const back = () => {
    props.prevStep(2);
  };

  return (
    <form>
      <input
        type="checkbox"
        id="checkone"
        name="addon"
        onChange={(e) => {
          props.setData({
            ...props.data,
            addon: e.target.value,
          });
        }}
        value="Online"
      />
      <label htmlFor="checkone">Online Service</label>
      <br />
      <input
        type="checkbox"
        id="checktwo"
        name="addon"
        onChange={(e) => {
          props.setData({
            ...props.data,
            addon: e.target.value,
          });
        }}
        value="storage"
      />
      <label htmlFor="checktwo">Larger Storage</label>
      <br />
      <input
        type="checkbox"
        id="checkthree"
        name="addon"
        onChange={(e) => {
          props.setData({
            ...props.data,
            addon: e.target.value,
          });
        }}
        value="custom"
      />
      <label htmlFor="checktwo">Customizable Profile</label>
      <br />
      <button onClick={() => next()}>Next</button>
      <br />
      <button onClick={() => back()}>Back</button>
    </form>
  );
};

export default Addons;
