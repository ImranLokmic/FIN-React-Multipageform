import React, { useState } from "react";
import "./form.css";
import { Personal, Plan, Addons, Finish } from "../../components/index";

const Form = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    addon: "",
  });

  const [step, setStep] = useState(1);

  const prevStep = (i) => {
    props.whoActive(i);
    setStep(i);
  };
  const nextStep = (i) => {
    props.whoActive(i);
    setStep(i);
  };

  

  switch (step) {
    case 1:
      return <Personal nextStep={nextStep} data={data} setData={setData} />;
    case 2:
      return <Plan nextStep={nextStep}  prevStep={prevStep} data={data} setData={setData} />;
    case 3:
      return <Addons nextStep={nextStep} prevStep={prevStep} data={data} setData={setData} />;
    case 4:
      return <Finish data={data} prevStep={prevStep} />;
    default:
  };


};

export default Form;
