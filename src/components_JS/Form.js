import React, { useState } from "react";
import FormSignup from "./FormSignup";
import { FormSucces } from "./FormSucces";
import "../components_CSS/Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSucces />}
    </>
  );
};

export default Form;
