import React, { useState, useEffect } from "react";

export const UseForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleChange, values, hadleSubmit };
};
