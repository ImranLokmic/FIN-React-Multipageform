import React from "react";
import "./personal.css";

const Personal = (props) => {
  const next = () => {
    if (props.data.name === "" || props.data.name.length <= 1) {
      return alert("Please enter your name");
    } else {
      if (props.data.email === "" || props.data.email.length <= 1) {
        return alert("Please enter your email");
      } else {
        if (props.data.phone === "" || props.data.phone.length <= 1) {
          return alert("Please enter your phone");
        } else {
          props.nextStep(2);
        }
      }
    }
  };

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => {
          props.setData({
            ...props.data,
            name: e.target.value,
          });
        }}
        value={props.data.name}
      />
      <br />
      <label htmlFor="email">Email Address</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        onChange={(e) => {
          props.setData({
            ...props.data,
            email: e.target.value,
          });
        }}
        value={props.data.email}
      />
      <br />
      <label htmlFor="phone">Phone Number</label>
      <br />
      <input
        type="number"
        id="phone"
        name="phone"
        onChange={(e) => {
          props.setData({
            ...props.data,
            phone: e.target.value,
          });
        }}
        value={props.data.phone}
      />
      <br />
      <button onClick={() => next()}>Next</button>
    </form>
  );
};

export default Personal;
