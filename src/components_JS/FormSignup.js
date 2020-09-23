import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import { TextField } from "@material-ui/core";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h2>Начни с нами сегодня! Создайте свой аккаунт</h2>
        <div className="form-inputs">
          <TextField
            className="form-input"
            label="Введите ваше имя"
            name="username"
            value={values.username}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <TextField
            className="form-input"
            label="Введите email"
            name="email"
            value={values.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <TextField
            className="form-input"
            label="Введите пароль"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <TextField
            className="form-input"
            label="Введите email"
            name="password2"
            type="password"
            value={values.password2}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            autoComplete="off"
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button
          className="form-input-btn"
          type="submit"
          buttonStyle="btn--outline"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
